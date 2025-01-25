import { ConnectionToDB } from "../utils/db.js";
import bcrypt from "bcryptjs";
export async function Login(req, res) {
  try {
    const client = await ConnectionToDB();
    const user = await req.body;
    user.dateField = Date.now();
    user.recentDate = new Date().toLocaleDateString();
    const findUser = await client
      .db("User_Info")
      .collection("users")
      .findOne({ email: user.email });

    if (!findUser) {
      await client.db("User_Info").collection("users").insertOne(user);
      res.status(200).json({
        message: "Login successfully!",
        success: true,
      });
    }

    if (findUser.email === user.email) {
      res.status(200).json({
        message: "Register successfully",
        success: true,
      });
    } else {
      res.status(400).json({
        message: "Something went wrong",
        success: false,
      });
    }
  } catch (error) {
    res.status(500).json({
      message: "Something went wrong",
      success: false,
    });
  }
}

export async function Register(req, res) {
  try {
    const client = await ConnectionToDB();
    const user = await req.body;
    const hashedPassword = await bcrypt.hash(user.password, 10);
    user.password = hashedPassword;
    user.dateField = Date.now();
    user.recentDate = new Date().toLocaleDateString();
    const findUser = await client
      .db("User_Info")
      .collection("users")
      .findOne({ email: user.email });
    if (!findUser) {
      await client.db("User_Info").collection("users").insertOne(user);
      res.status(200).json({
        message: "Register successfully!",
        success: true,
      });
    }

    if (findUser.email === user.email) {
      res.status(200).json({
        message: "Register successfully",
        success: true,
      });
    } else {
      res.status(400).json({
        message: "Something went wrong",
        success: false,
      });
    }
  } catch (error) {
    res.status(500).json({
      message: "Something went wrong",
      success: false,
    });
  }
}

export async function UserUpdate(req, res) {
  try {
    const client = await ConnectionToDB();
    const email = await req.params.id;
    const reqBody = await req.body;
    const { displayName, photoURL } = await req.body;
    if (!displayName || !photoURL) {
      res.status(400).json({
        message: "Some data is blank",
        success: false,
      });
    }

    const filter = { email: email };
    const updateDoc = {
      $set: reqBody,
    };
    const options = { upsert: true };
    await client
      .db("User_Info")
      .collection("users")
      .updateOne(filter, updateDoc, options);
    res.status(200).json({
      message: "Update profile successfully!",
      success: true,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
      success: false,
    });
  }
}
