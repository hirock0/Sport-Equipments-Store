import { useForm } from "react-hook-form";
import { useApiContext } from "../../utils/ContextApi/ContextApi";

const ProductFrom = ({ onProductActions }) => {
  const { onEditProduct } = onProductActions;

  const flag = onProductActions.flag;
  const product = onProductActions.product;
  const { loggedUser } = useApiContext();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  return (
    <>
      <form
        onSubmit={handleSubmit(async (data) =>
          flag == "edit"
            ? await onEditProduct({ data, reset })
            : await onProductActions({ data, reset })
        )}
        className=" grid grid-cols-2 max-md:grid-cols-1 gap-5 p-5"
      >
        {/* Image */}
        <div className="form-control">
          <label className="label font-bold">Image URL</label>
          <input
            type="text"
            name="image"
            placeholder="Enter image URL"
            className="input input-bordered"
            defaultValue={flag == "edit" ? product?.image : ""}
            {...register("image", { required: "Need to fill it!" })}
          />
          {errors.image && (
            <h1 className=" text-red-600 pl-5 mt-1">{errors.image.message}</h1>
          )}
        </div>

        {/* Item Name */}
        <div className="form-control">
          <label className="label font-bold">Item Name</label>
          <input
            type="text"
            name="itemName"
            placeholder="Enter item name"
            className="input input-bordered"
            defaultValue={flag == "edit" ? product?.itemName : ""}
            {...register("itemName", { required: "Need to fill it!" })}
          />
          {errors.itemName && (
            <h1 className=" text-red-600 pl-5 mt-1">
              {errors.itemName.message}
            </h1>
          )}
        </div>

        {/* Category Name */}
        <div className="form-control">
          <label className="label font-bold">Category Name</label>
          <input
            type="text"
            name="categoryName"
            placeholder="Enter category name"
            className="input input-bordered"
            defaultValue={flag == "edit" ? product?.categoryName : ""}
            {...register("categoryName", {
              required: "Need to fill it!",
            })}
          />
          {errors.categoryName && (
            <h1 className=" text-red-600 pl-5 mt-1">
              {errors.categoryName.message}
            </h1>
          )}
        </div>

        {/* Description */}
        <div className="form-control">
          <label className="label font-bold">Description</label>
          <textarea
            name="description"
            placeholder="Enter description"
            className="textarea textarea-bordered"
            defaultValue={flag == "edit" ? product?.description : ""}
            {...register("description", { required: "Need to fill it!" })}
          />
          {errors.description && (
            <h1 className=" text-red-600 pl-5 mt-1">
              {errors.description.message}
            </h1>
          )}
        </div>

        {/* Price */}
        <div className="form-control">
          <label className="label font-bold">Price</label>
          <input
            type="text"
            name="price"
            placeholder="Enter price"
            className="input input-bordered"
            defaultValue={flag == "edit" ? product?.price : ""}
            {...register("price", { required: "Need to fill it!" })}
          />
          {errors.price && (
            <h1 className=" text-red-600 pl-5 mt-1">{errors.price.message}</h1>
          )}
        </div>

        {/* Rating */}
        <div className="form-control">
          <label className="label font-bold">Rating</label>
          <input
            type="number"
            name="rating"
            placeholder="Enter rating (1-5)"
            className="input input-bordered"
            defaultValue={flag == "edit" ? product?.rating : ""}
            {...register("rating", { required: "Need to fill it!" })}
          />
          {errors.rating && (
            <h1 className=" text-red-600 pl-5 mt-1">{errors.rating.message}</h1>
          )}
        </div>

        {/* Customization */}
        <div className="form-control">
          <label className="label font-bold">Customization</label>
          <input
            type="text"
            name="customization"
            placeholder="Enter customization options"
            className="input input-bordered"
            defaultValue={flag == "edit" ? product?.customization : ""}
            {...register("customization", {
              required: "Need to fill it!",
            })}
          />
          {errors.customization && (
            <h1 className=" text-red-600 pl-5 mt-1">
              {errors.customization.message}
            </h1>
          )}
        </div>

        {/* Processing Time */}
        <div className="form-control">
          <label className="label font-bold">Processing Time</label>
          {flag == "edit" && <h1>{product?.processingTime}</h1>}
          <input
            type="date"
            name="processingTime"
            placeholder="Enter delivery time"
            className="input input-bordered"
            {...register("processingTime", {
              required: "Need to fill it!",
            })}
          />
          {errors.processingTime && (
            <h1 className=" text-red-600 pl-5 mt-1">
              {errors.processingTime.message}
            </h1>
          )}
        </div>

        {/* Stock Status */}
        <div className="form-control">
          <label className="label font-bold">Stock Status</label>
          <input
            type="text"
            name="stockStatus"
            placeholder="Enter available product quantity"
            className="input input-bordered"
            defaultValue={flag == "edit" ? product?.stockStatus : ""}
            {...register("stockStatus", { required: "Need to fill it!" })}
          />
          {errors.stockStatus && (
            <h1 className=" text-red-600 pl-5 mt-1">
              {errors.stockStatus.message}
            </h1>
          )}
        </div>

        {/* User Email (Read-only) */}
        <div className="form-control">
          <label className="label font-bold">User Email</label>
          <input
            type="email"
            name="email"
            readOnly
            value={loggedUser?.email}
            className="input input-bordered bg-gray-200"
            {...register("email", { required: "Need to fill it!" })}
          />
          {errors.email && (
            <h1 className=" text-red-600 pl-5 mt-1">{errors.email.message}</h1>
          )}
        </div>

        {/* User Name (Read-only) */}
        <div className="form-control">
          <label className="label font-bold">User Name</label>
          <input
            type="text"
            name="userName"
            value={loggedUser?.displayName}
            readOnly
            className="input input-bordered bg-gray-200"
            {...register("userName", { required: "Need to fill it!" })}
          />
          {errors.userName && (
            <h1 className=" text-red-600 pl-5 mt-1">
              {errors.userName.message}
            </h1>
          )}
        </div>

        {/* Submit Button */}
        <button type="submit" className="btn btn-primary w-full md:col-span-2">
          {flag == "edit" ? "Edit" : "Add"}
        </button>
      </form>
    </>
  );
};

export default ProductFrom;
