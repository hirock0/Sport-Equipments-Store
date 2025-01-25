import React, { useState, useEffect } from "react";
import { Fade } from "react-awesome-reveal";
import AOS from "aos";
import "aos/dist/aos.css";
import { useApiContext } from "../../utils/ContextApi/ContextApi";
import { Link } from "react-router-dom";

const OurProducts = () => {
  const { products, setProducts, loading } = useApiContext();
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const filterProducts = products.filter((item) =>
    item.itemName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="bg-gray-100 min-h-screen py-10">
      {/* Search Bar */}
      <div className="flex justify-center mb-8">
        <div className="flex items-center w-full max-w-lg bg-white rounded-md shadow-md px-4 py-2">
          <input
            type="text"
            placeholder="Search products..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="flex-grow focus:outline-none text-gray-700"
          />
          <button className="text-blue-500 hover:text-blue-600">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 20l6-6m0 0l-6-6m6 6H3"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Products Grid */}
      {loading && (
        <div className=" fixed left-0 right-0 bottom-0 top-0 flex items-center justify-center bg-zinc-100 z-40">
          <div className=" loading loading-spinner loading-lg bg-blue-600"></div>
        </div>
      )}

      {filterProducts.length !== 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4 lg:px-20">
          {filterProducts?.map((product, index) => (
            <Fade key={index} triggerOnce>
              <div
                className="bg-white rounded-lg shadow-md overflow-hidden"
                data-aos="fade-up"
              >
                <img
                  src={product?.image}
                  alt={product?.itemName}
                  className="w-full h-48 object-contain"
                />
                <div className="p-4">
                  <h2 className="text-lg font-semibold text-gray-800">
                    {product?.itemName}
                  </h2>
                  <p className="text-sm text-gray-600">
                    Category: {product?.categoryName}
                  </p>
                  <p className="text-gray-800 font-bold mt-2">
                    Price: {product.price}
                  </p>
                  <p className="text-gray-600">Rating: {product?.rating}</p>
                  <p className="text-gray-600">
                    Processing Time: {product?.processingTime}
                  </p>
                  <p className="text-gray-600">Stock: {product?.stockStatus}</p>
                  <Link to={`/products/details/${product?._id}`}>
                    <button className="mt-4 w-full text-center bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600">
                      View Details
                    </button>
                  </Link>
                </div>
              </div>
            </Fade>
          ))}
        </div>
      ) : (
        <div className=" pt-5">
          <h1 className=" text-center text-2xl font-semibold">
            There are no data!
          </h1>
        </div>
      )}
    </div>
  );
};

export default OurProducts;
