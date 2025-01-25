import dotenv from "dotenv";
dotenv.config();
import { MongoClient, ServerApiVersion } from "mongodb";

const uri = process.env.MONGODB_URI;
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

export const ConnectionToDB = async () => {
  try {
    // await client.connect();
    // await client.db("admin").command({ ping: 1 });
    // console.log("DB is connected");
    return client;
  } catch (error) {
    await client.close();
  }
};
