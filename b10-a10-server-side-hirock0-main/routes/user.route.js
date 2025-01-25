import dotenv from "dotenv";
dotenv.config();
import express from "express";
import { Login, Register, UserUpdate } from "../controllers/user.controller.js";
const useRouter = express.Router();
useRouter.post("/register", Register);
useRouter.put("/update/:id", UserUpdate);
useRouter.post("/login", Login);
export default useRouter;
