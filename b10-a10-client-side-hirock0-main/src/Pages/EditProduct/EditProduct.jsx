import { Fade } from "react-awesome-reveal";
import axios from "axios";
import swal from "sweetalert";
import { useApiContext } from "../../utils/ContextApi/ContextApi";
import { FaArrowLeft } from "react-icons/fa6";
import { useParams } from "react-router-dom";
import ProductFrom from "../../components/ProductFrom/ProductFrom";
import { useNavigate } from "react-router-dom";
const EditProduct = () => {
  const navigate = useNavigate();
  const productId = useParams().Id || "";
  const { products, setRefreshFlag } = useApiContext();
  const findProduct = products?.find((item) => item?._id == productId);

  const onEditProduct = async ({ data }) => {
    setRefreshFlag(true);
    try {
      const Product = JSON.stringify(data);
      const dbResponse = await axios.put(
        `${import.meta.env.VITE_BACKEND_DOMAIN}/products/update/${productId}`,
        Product,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (dbResponse?.data?.success) {
        swal({ text: dbResponse?.data?.message, icon: "success" });
        setRefreshFlag(false);
      } else {
        swal({ text: dbResponse?.data?.message, icon: "warning" });
      }
    } catch (error) {
      swal({ text: error.message, icon: "warning" });
    }
  };

  return (
    <main className=" pb-20 pt-10">
      <section>
        <div className=" absolute left-0 right-0 z-40 top-24 w-full container mx-auto px-5  ">
          <button
            to={"/"}
            onClick={() => navigate(-1)}
            className=" bg-blue-600 px-5 py-2 rounded-sm shadow-lg text-white hover:bg-blue-700 active:bg-blue-800"
          >
            <FaArrowLeft size={30} />
          </button>
        </div>
        <div className=" shadow-lg bg-base-100 rounded-lg">
          <Fade cascade>
            <h1 className="text-2xl font-bold text-center mb-6">
              Edit Product
            </h1>
            <ProductFrom
              onProductActions={{
                product: findProduct,
                flag: "edit",
                onEditProduct,
              }}
            />
          </Fade>
        </div>
      </section>
    </main>
  );
};

export default EditProduct;
