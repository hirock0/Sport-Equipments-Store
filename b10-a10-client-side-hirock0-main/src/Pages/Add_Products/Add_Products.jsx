import { Fade } from "react-awesome-reveal";
import axios from "axios";
import swal from "sweetalert";
import ProductFrom from "../../components/ProductFrom/ProductFrom";
import { useApiContext } from "../../utils/ContextApi/ContextApi";
import { useNavigate } from "react-router-dom";

const Add_Products = () => {
  const navigate = useNavigate();
  const { setLoading, setProducts, products } = useApiContext();

  const onAddProducts = async ({ data, reset }) => {
    setLoading(true);
    try {
      const Product = JSON.stringify(data);
      const dbResponse = await axios.post(
        `${import.meta.env.VITE_BACKEND_DOMAIN}/products/add_product`,
        Product,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (dbResponse?.data?.success) {
        swal({ text: dbResponse?.data?.message, icon: "success" });
        reset();
        setProducts([dbResponse?.data?.savedProduct, ...products]);
        setLoading(false);
      } else {
        swal({ text: dbResponse?.data?.message, icon: "success" });
      }
    } catch (error) {
      swal({ text: error.message, icon: "success" });
    }
  };

  return (
    <main className=" pb-20 pt-10">
      <section>
        <div className=" relative shadow-lg bg-base-100 rounded-lg">
          <button
            onClick={() => navigate(-1)}
            className=" absolute left-2 top-2 z-20 bg-blue-600 text-white px-4 py-1 rounded-sm shadow-lg hover:bg-blue-700 active:bg-blue-800"
          >
            Back
          </button>

          <Fade cascade className="">
            <h1 className="text-2xl font-bold text-center mb-6">
              Add New Item
            </h1>
            <ProductFrom onProductActions={onAddProducts} />
          </Fade>
        </div>
      </section>
    </main>
  );
};

export default Add_Products;
