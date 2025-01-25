import { Link } from "react-router-dom";
import { useApiContext } from "../../utils/ContextApi/ContextApi";
import { useState } from "react";
import { FaFilterCircleDollar } from "react-icons/fa6";

const All_Equipments = () => {
  const { products, loading, sortFlag, setSortFlag } = useApiContext();
  const [sortedArray, setSortedArray] = useState(null);
  const [indicator, setIndicator] = useState(null);

  const priceSortedFunction = (category) => {
    if (category === "asc") {
      setIndicator(category);
      const ascending = products.sort(
        (a, b) => Number(a.price) - Number(b.price)
      );
      setSortedArray(ascending);
    } else if (category === "desc") {
      setIndicator(category);
      const descending = products.sort(
        (a, b) => Number(b.price) - Number(a.price)
      );
      setSortedArray(descending);
    } else if (category === "refresh") {
      window.location.reload();
    }
  };


  return (
    <main className=" pb-20">
      <section>
        <div className="">
          <h1 className=" text-center text-4xl font-semibold mt-5">
            All Projects
          </h1>
          <div className="  flex items-center mb-5 justify-end">
            <div className="relative">
              <button
                onClick={(e) => {
                  e.stopPropagation(), setSortFlag(!sortFlag);
                }}
                className=" border flex items-center gap-3 px-5 py-2 rounded-md shadow-lg bg-base-100"
              >
                <span>Sort by price</span>
                <FaFilterCircleDollar size={20} className=" text-blue-600" />
              </button>
              <div
                onClick={(e) => e.stopPropagation()}
                className={`${
                  !sortFlag && "hidden"
                } flex flex-col absolute z-30 top-11 right-0 left-0 bg-base-100 border justify-center px-2 items-start gap-2 shadow-lg rounded-md py-2`}
              >
                <button
                  onClick={() => priceSortedFunction("asc")}
                  className={` ${
                    indicator === "asc" && "text-yellow-600"
                  } hover:text-yellow-500 active:text-yellow-600`}
                >
                  Ascending
                </button>
                <button
                  onClick={() => priceSortedFunction("desc")}
                  className={` ${
                    indicator === "desc" && "text-yellow-600"
                  } hover:text-yellow-500 active:text-yellow-600`}
                >
                  Descending
                </button>
                <button onClick={() => priceSortedFunction("refresh")}>
                  All
                </button>
              </div>
            </div>
          </div>

          {loading ? (
            <div className=" fixed left-0 right-0 bottom-0 top-0 flex items-center justify-center bg-zinc-100 z-40">
              <div className=" loading loading-spinner loading-lg bg-blue-600"></div>
            </div>
          ) : (
            <div className={`${products.length < 5 && "min-h-screen"}`}>
              <div className=" bg-base-200 hide_scroll w-full max-md:overflow-x-scroll max-md:text-nowrap">
                <table className=" w-full text-center ">
                  <thead>
                    <tr className=" border theadTr ">
                      <th>Id No.</th>
                      <th>Name</th>
                      <th>Category</th>
                      <th>Price(BDT)</th>
                      <th>Image</th>
                      <th>View</th>
                    </tr>
                  </thead>
                  <tbody className="">
                    {indicator === null
                      ? products?.map((item, index) => (
                          <tr key={index} className=" tbodyTr">
                            <th>{index + 1}</th>
                            <td>{item?.itemName}</td>
                            <td>{item?.categoryName}</td>
                            <td>{Number(item?.price).toLocaleString()} tk</td>

                            <td className=" flex justify-center items-center">
                              <img
                                src={item?.image}
                                alt={item?.itemName}
                                className=" w-12 h-12 object-contain"
                              />
                            </td>

                            <td className="  ">
                              <Link
                                to={`/products/details/${item?._id}`}
                                className=" bg-green-600 hover:bg-green-700 active:bg-green-800 flex items-center justify-center text-white w-full h-8 px-5 rounded-md shadow-lg"
                              >
                                View
                              </Link>
                            </td>
                          </tr>
                        ))
                      : sortedArray?.map((item, index) => (
                          <tr key={index} className=" tbodyTr">
                            <th>{index + 1}</th>
                            <td>{item?.itemName}</td>
                            <td>{item?.categoryName}</td>
                            <td>{Number(item?.price).toLocaleString()} tk</td>

                            <td className=" flex justify-center items-center">
                              <img
                                src={item?.image}
                                alt={item?.itemName}
                                className=" w-12 h-12 object-contain"
                              />
                            </td>

                            <td className="  ">
                              <Link
                                to={`/products/details/${item?._id}`}
                                className=" bg-green-600 hover:bg-green-700 active:bg-green-800 flex items-center justify-center text-white w-full h-8 px-5 rounded-md shadow-lg"
                              >
                                View
                              </Link>
                            </td>
                          </tr>
                        ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </div>
      </section>
    </main>
  );
};

export default All_Equipments;
