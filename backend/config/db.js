import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config(); // Load environment variables

const dbURI = process.env.MONGODB_URI;

if (!dbURI) {
  console.error("Error: MONGODB_URI is not defined in the environment variables.");
  process.exit(1);
}

export const connectDB = async () => {
  try {
    await mongoose.connect(dbURI); // No options needed for modern Mongoose
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    process.exit(1); // Exit process with failure
  }
};
