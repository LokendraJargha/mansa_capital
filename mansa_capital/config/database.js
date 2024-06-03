import mongoose from "mongoose";

let connected = false;

const connectDB = async () => {
  mongoose.set("strictQuery", true);
  if (connected) {
    console.log("Already Connected");
    return;
  }
  try {
    console.log(process.env.MONGO_URI)
    await mongoose.connect(process.env.MONGO_URI);
    connected = true;
    console.log("MongoDB Connected");
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

export default connectDB;
