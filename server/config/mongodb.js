import { configDotenv } from "dotenv";
import mongoose from "mongoose";
configDotenv();

const connectDB = async () => {
  mongoose.connection.on("connected", () => {
    console.log(`MongoDB connected at ${process.env.MONGODB_URI}`);
  });

  await mongoose.connect(`${process.env.MONGODB_URI}/mern-auth`);
};

export default connectDB;
