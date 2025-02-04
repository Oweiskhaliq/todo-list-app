import mongoose, { Mongoose } from "mongoose";

import dotenv from "dotenv";
dotenv.config();

if (!process.env.MONGOOSE_URI) {
  console.log("Please provide MONGOOSE_URI in the .env file.");
}
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGOOSE_URI);
    console.log("Successfuly Connected To DataBase.");
  } catch (error) {
    console.log("DataBase connection faild.", error);
    process.exit(1);
  }
};

export default connectDB;
