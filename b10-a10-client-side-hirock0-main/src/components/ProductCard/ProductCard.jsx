import { MdDateRange } from "react-icons/md";
import { Link } from "react-router-dom";
const ProductCard = ({ item }) => {
  return (
    <div className=" border space-y-2 border-slate-400 rounded-sm shadow-lg p-5">
      <div className=" h-52 bg-base-200 py-5">
        <img
          src={item?.image}
          alt="foot_ball"
          className=" h-full w-full object-contain"
        />
      </div>
      <div className="">
        <h1>{item?.itemName}</h1>
        <h1>BDT: {item?.price} tk</h1>
      </div>

      <div className=" flex justify-between">
        <div className="">
          <div className=" flex items-center gap-4">
            <MdDateRange />
            <p>{item?.recentDate}</p>
          </div>
          <div className=" flex items-center gap-4">
            <MdDateRange />
            <p>5 - 6 yrs</p>
          </div>
          <div className="">
            1 day ago - <span className=" text-blue-600">update</span>
          </div>
        </div>
        {/* ---- */}
        <div className=" flex items-end">
          <Link
            to={`/products/details/${item?._id}`}
            className=" bg-blue-600 text-white font-semibold  h-f px-4 py-1 rounded-sm shadow-lg"
          >
            Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
