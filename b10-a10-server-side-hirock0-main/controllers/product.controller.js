import { ConnectionToDB } from "../utils/db.js";
import { ObjectId } from "mongodb";
export async function AddProduct(req, res) {
  try {
    const product = await req.body;
    product.dateField = Date.now();
    product.recentDate = new Date().toLocaleDateString();
    const client = await ConnectionToDB();
    const productStatus = await client
      .db("All_Products")
      .collection("products")
      .insertOne(product);
    product._id = productStatus?.insertedId;
    const savedProduct = product;
    res.status(200).json({
      message: "Data added",
      success: true,
      savedProduct,
    });
  } catch (error) {
    res.status(500).json({
      message: "Data not added",
      success: false,
    });
  }
}

export async function AllProducts(req, res) {
  try {
    const client = await ConnectionToDB();
    const products = (
      await client.db("All_Products").collection("products").find().toArray()
    ).reverse();
    res.status(200).json({
      message: "Data added",
      success: true,
      products,
    });
  } catch (error) {
    res.status(500).json({
      message: "Data not found",
      success: false,
    });
  }
}
export async function UpdateProduct(req, res) {
  try {
    const client = await ConnectionToDB();
    const Id = await req.params.Id;
    const product = await req.body;
    const filter = { _id: new ObjectId(Id) };
    const options = { upsert: true };
    const updateDoc = {
      $set: product,
    };
    const findProduct = await client
      .db("All_Products")
      .collection("products")
      .updateMany(filter, updateDoc, options);
    if (findProduct?.matchedCount === 0) {
      return res
        .status(404)
        .json({ message: "User not found", success: false });
    }
    res.status(200).json({
      message: "Data is updated",
      success: true,
    });
  } catch (error) {
    res.status(500).json({
      message: "Data not updated",
      success: false,
    });
  }
}

export async function ProductDelete(req, res) {
  try {
    const client = await ConnectionToDB();
    const Id = await req.params.Id;
    const query = {
      _id: new ObjectId(Id),
    };
    const deleteResponse = await client
      .db("All_Products")
      .collection("products")
      .deleteOne(query);
    if (deleteResponse?.deletedCount == 0) {
      return res.status(500).json({
        message: "Data not deleted",
        success: false,
      });
    }
    res.status(200).json({
      message: "Data is deleted",
      success: true,
    });
  } catch (error) {
    res.status(500).json({
      message: "Something goes wrong",
      success: false,
    });
  }
}
export async function HomePage_Products(req, res) {
  try {
    const client = await ConnectionToDB();
    const products = await client
      .db("All_Products")
      .collection("products")
      .find()
      .limit(6)
      .toArray();

    res.status(200).json({
      message: "Data found successfully",
      success: true,
      products,
    });
  } catch (error) {
    res.status(500).json({
      message: "Something goes wrong",
      success: false,
    });
  }
}
