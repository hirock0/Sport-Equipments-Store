import dotenv from "dotenv";
dotenv.config();
import express from "express";
import cors from "cors";
import useRouter from "./routes/user.route.js";
import useProductRouter from "./routes/product.route.js";
const app = express();
const corsOptions = {
  origin: process.env.CLIENT_DOMAIN,
  credentials: true,
};
app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const port = process.env.PORT;

app.use("/user", useRouter);
app.use("/products", useProductRouter);
app.listen(port || 5000, () => {
  console.log(`Server is running on port ${port}`);
});
