import { useApiContext } from "../../utils/ContextApi/ContextApi";
import ProductCard from "../ProductCard/ProductCard";
import { Link } from "react-router-dom";
const Product_Section = () => {
  const { loading, homepageProduct } = useApiContext();
  return (
    <section className=" pb-20">
      <div className=" ">
        <h1 className=" text-3xl mt-5 text-center font-semibold">Products</h1>
        {loading ? (
          <div className=" fixed left-0 right-0 bottom-0 top-0 flex items-center justify-center bg-zinc-100 z-40">
            <div className=" loading loading-spinner loading-lg bg-blue-600"></div>
          </div>
        ) : (
          <div className=" mt-5 grid grid-cols-3 gap-5 max-lg:grid-cols-2 max-md:grid-cols-1">
            {homepageProduct?.map((item, index) => (
              <ProductCard key={index} item={item} />
            ))}
          </div>
        )}
        <div className=" mt-5 flex justify-end items-center">
          <Link to={"/products"}>
            <button className=" px-5 bg-blue-500 text-white py-3 rounded-sm shadow-lg hover:bg-blue-700 active:bg-blue-800">
              More Products
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Product_Section;
