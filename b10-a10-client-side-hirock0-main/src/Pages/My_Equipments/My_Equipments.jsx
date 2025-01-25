import axios from "axios";
import swal from "sweetalert";
import { useApiContext } from "../../utils/ContextApi/ContextApi";
import { Link } from "react-router-dom";
import MyProductCard from "../../components/MyProductCard/MyProductCard";

const My_Equipments = () => {
  const {
    products,
    setProducts,
    setLoading,
    popupFlag,
    setPopupFlag,
    productId,
    loggedUser,
  } = useApiContext();

  const loggedUserProducts = products?.filter(
    (item) => item.email == loggedUser?.email
  );

  const onDeleteProduct = async (Id) => {
    setLoading(true);
    try {
      const reqDelete = await axios.delete(
        `${import.meta.env.VITE_BACKEND_DOMAIN}/products/delete/${Id}`
      );
      if (reqDelete?.data?.success) {
        swal({ text: reqDelete?.data?.message, icon: "success" });
        setProducts(products?.filter((item) => item._id !== Id));
        setLoading(false);
        setPopupFlag(false);
      } else {
        swal({ text: reqDelete?.data?.message, icon: "warning" });
      }
    } catch (error) {
      swal({ text: error.message, icon: "warning" });
    }
  };

  return (
    <main className=" pb-20 py-5 ">
      <section>
        {loggedUserProducts?.length !== 0 ? (
          <div className=" grid grid-cols-3 max-lg:grid-cols-2 max-sm:grid-cols-1 gap-5 ">
            {loggedUserProducts?.map((item, index) => (
              <MyProductCard key={index} item={item} />
            ))}
          </div>
        ) : (
          <div className=" min-h-[80vh] flex items-center justify-center ">
            <div className="">
              <h1 className=" text-center text-3xl max-md:text-2xl max-sm:text-xl">
                There are added data yet!
              </h1>
              <div className=" flex justify-center items-center mt-5">
                <Link to={"/"}>
                  <button className=" bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white px-5 py-2 rounded-sm shadow-lg">
                    Back to Home
                  </button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </section>

      {/* popup_section_start */}
      <div
        className={` ${
          !popupFlag && "hidden"
        } fixed top-0 left-0 right-0 bottom-0 bg-slate-800/90 text-white z-50 flex items-center justify-center`}
      >
        <div className=" p-10 max-md:p-5 rounded-md shadow-lg bg-slate-800">
          <h1 className=" text-center text-3xl max-md:text-2xl max-sm:text-xl">
            Do you want to delete?
          </h1>
          <div className="mt-10 max-md:mt-5 flex items-center gap-5 justify-between">
            <button
              onClick={() => onDeleteProduct(productId)}
              className=" bg-red-600 hover:bg-red-700 active:bg-red-800 w-52 max-md:w-48 max-sm:w-28 py-2 rounded-sm shadow-lg"
            >
              Delete
            </button>
            <button
              onClick={() => setPopupFlag(false)}
              className=" bg-blue-600 hover:bg-blue-700 active:bg-blue-800 w-52 max-md:w-48 max-sm:w-28 py-2 rounded-sm shadow-lg"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default My_Equipments;
