import mongoose from "mongoose";

export const connectToDb = async () => {
  console.log("db connecting...");
  try {
    const dbres = await mongoose.connect(process.env.MONGO_URI);
    console.log("db connected");
  } catch (error) {
    console.log(error);
  }
};
