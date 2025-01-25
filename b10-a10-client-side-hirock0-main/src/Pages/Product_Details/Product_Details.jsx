import { useParams } from "react-router-dom";
import { useApiContext } from "../../utils/ContextApi/ContextApi";
import { Fade } from "react-awesome-reveal";
import {
  FaUser,
  FaEnvelope,
  FaStar,
  FaDollarSign,
  FaCogs,
  FaClock,
  FaBox,
  FaCalendarAlt,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Product_Details = () => {
  const navigate = useNavigate();
  const productId = useParams().Id || "";
  const { products } = useApiContext();
  const filterProduct = products.find((item) => item._id == productId);
  return (
    <main className=" pb-10 ">
      <section>
        <div className="py-5 max-sm:p-0 bg-base-200 flex items-center justify-center">
          <Fade className=" w-full">
            <div className=" bg-base-100 p-5 shadow-lg rounded-lg relative ">
              <button
                onClick={() => navigate(-1)}
                className=" absolute z-20 left-2 top-2 bg-blue-600 text-white px-4 py-1 rounded-sm shadow-lg hover:bg-blue-700 active:bg-blue-800"
              >
                Back
              </button>
              <div className=" flex justify-center items-center">
                <img
                  src={filterProduct?.image}
                  alt={filterProduct?.itemName}
                  className=" w-52 h-52 max-sm:w-32 max-sm:h-32 object-contain"
                />
              </div>
              <div className="p-6">
                <div className=" text-center">
                  <h1 className="text-2xl font-semibold">
                    {filterProduct?.itemName}
                  </h1>
                  <p className="text-sm text-gray-500 mb-4">
                    <span className="text-gray-700 font-semibold">
                      Category:
                    </span>{" "}
                    {filterProduct?.categoryName}
                  </p>
                </div>
                <div className=" flex justify-center">
                  <p className="text-gray-600 mb-4">
                    {filterProduct?.description}
                  </p>
                </div>

                <div className=" md:flex md:justify-center md:gap-10">
                  <div className="space-y-3 ">
                    <div className="flex items-center">
                      <FaDollarSign className="text-gray-700 mr-2" />
                      <p>
                        <span className="font-semibold">Price:</span> $
                        {filterProduct?.price}
                      </p>
                    </div>

                    <div className="flex items-center">
                      <FaStar className="text-yellow-500 mr-2" />
                      <p>
                        <span className="font-semibold">Rating:</span>{" "}
                        {filterProduct?.rating} ⭐
                      </p>
                    </div>

                    <div className="flex items-center">
                      <FaCogs className="text-gray-700 mr-2" />
                      <p>
                        <span className="font-semibold">Customization:</span>{" "}
                        {filterProduct?.customization}
                      </p>
                    </div>

                    <div className="flex items-center">
                      <FaClock className="text-gray-700 mr-2" />
                      <p>
                        <span className="font-semibold">Processing Time:</span>{" "}
                        {filterProduct?.processingTime}
                      </p>
                    </div>

                    <div className="flex items-center">
                      <FaBox className="text-gray-700 mr-2" />
                      <p>
                        <span className="font-semibold">Stock Status:</span>{" "}
                        {filterProduct?.stockStatus}
                      </p>
                    </div>
                  </div>

                  <div className="mt-6 space-y-3">
                    <div className="flex items-center">
                      <FaEnvelope className="text-gray-700 mr-2" />
                      <p>
                        <span className="font-semibold">Email:</span>{" "}
                        {filterProduct?.email}
                      </p>
                    </div>
                    <div className="flex items-center">
                      <FaUser className="text-gray-700 mr-2" />
                      <p>
                        <span className="font-semibold">Seller:</span>{" "}
                        {filterProduct?.userName}
                      </p>
                    </div>
                    <div className="flex items-center">
                      <FaCalendarAlt className="text-gray-700 mr-2" />
                      <div className=" flex items-center gap-2">
                        <span className="font-semibold">Date Added:</span>{" "}
                        <h1>{filterProduct?.recentDate}</h1>
                      </div>
                    </div>
                  </div>
                </div>
                <div className=" mt-5 flex justify-center items-center">
                  <button className=" bg-blue-600 text-white px-5 py-2 rounded-lg shadow-lg">
                    Add Cart
                  </button>
                </div>
              </div>
            </div>
          </Fade>
        </div>
      </section>
    </main>
  );
};

export default Product_Details;
