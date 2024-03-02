import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const MONGO_URI = process.env.MONGO_URI;

mongoose.connect(MONGO_URI);

mongoose.connection.on("connected", () => {
  console.log("Mongo connection started successfully!");
});
mongoose.connection.on("reconnected", () => {
  console.log("Mongo connection reestablished.");
});
mongoose.connection.on("disconnected", () => {
  console.log("Mongo connection is disconnected.");
});