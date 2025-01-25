import React from "react";
import { Fade } from "react-awesome-reveal";
import {
  FaDollarSign,
  FaStar,
  FaCogs,
  FaTruck,
  FaEdit,
  FaTrashAlt,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import { useApiContext } from "../../utils/ContextApi/ContextApi";

const MyProductCard = ({ item }) => {
  const { popupFlag, setPopupFlag, setProductId } = useApiContext();
  return (
    <div className="card w-full  bg-base-100 shadow-xl border p-5 max-md:p-2 border-gray-200 rounded-lg">
      <Fade>
        <img
          src={item?.image}
          alt={item?.itemName}
          className=" h-48 w-full object-contain"
        />

        <div className="card-body">
          <h2 className="card-title text-lg font-bold">{item?.itemName}</h2>
          <p className="text-sm text-gray-600">
            Category: <span className="font-medium">{item?.categoryName}</span>
          </p>

          <div className="mt-2 text-sm text-gray-600">
            <p>
              <FaDollarSign className="inline mr-1 text-green-500" />
              <strong>Price:</strong> ${item?.price}
            </p>
            <p>
              <FaStar className="inline mr-1 text-yellow-500" />
              <strong>Rating:</strong> {item?.rating} ⭐
            </p>
            <p>
              <FaCogs className="inline mr-1 text-blue-500" />
              <strong>Customization:</strong> {item?.customization}
            </p>
            <p>
              <FaTruck className="inline mr-1 text-purple-500" />
              <strong>Processing Time:</strong> {item?.processingTime}
            </p>
            <p>
              <strong>Stock:</strong>{" "}
              {item?.stockStatus > 0
                ? `${item?.stockStatus} available`
                : "Out of Stock"}
            </p>
          </div>
          <div className="divider"></div>

          <div className=" mt-4  flex items-center gap-3 justify-between">
            <Link
              to={`/product/edit/${item?._id}`}
              className="bg-blue-600 hover:bg-blue-700 active:bg-blue-800 flex items-center justify-center gap-3 text-white w-1/2 h-8 rounded-md shadow-lg"
            >
              <FaEdit />
              <span>Update</span>
            </Link>

            <button
              onClick={() => {
                setProductId(item?._id), setPopupFlag(true);
              }}
              className="bg-red-600 hover:bg-red-700 active:bg-red-800 flex items-center justify-center gap-3 text-white w-1/2 h-8 rounded-md shadow-lg"
            >
              <FaTrashAlt /> <span>Delete</span>
            </button>
          </div>
        </div>
      </Fade>
    </div>
  );
};

export default MyProductCard;
