import dotenv from "dotenv";
dotenv.config();
import express from "express";
import {
  AddProduct,
  AllProducts,
  HomePage_Products,
  ProductDelete,
  UpdateProduct,
} from "../controllers/product.controller.js";
const useProductRouter = express.Router();
useProductRouter.post("/add_product", AddProduct);
useProductRouter.get("/all_products", AllProducts);
useProductRouter.put("/update/:Id", UpdateProduct);
useProductRouter.delete("/delete/:Id", ProductDelete);
useProductRouter.get("/limited", HomePage_Products);
export default useProductRouter;
