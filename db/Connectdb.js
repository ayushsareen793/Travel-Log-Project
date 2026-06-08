import mongoose from "mongoose";

const connectDB = async () => {
  if (mongoose.connections[0].readyState) return; // already connected

  try {
    const conn = await mongoose.connect(process.env.MONGODB_URI);
    console.log(`MongoDB Connected: ${conn.connection.host}`); // was missing $ sign
  } catch (error) {
    console.error(error.message);
    process.exit(1);
  }
}

export default connectDB;