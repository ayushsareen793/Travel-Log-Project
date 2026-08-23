import mongoose from "mongoose";
import Log from "../models/Log.js";
import dotenv from "dotenv";
dotenv.config({ path: ".env.local" });

async function apply() {
  await mongoose.connect(process.env.MONGODB_URI);
  console.log("Connected to MongoDB");
  
  await Log.syncIndexes();
  console.log("✅ Index created successfully!");
  
  const indexes = await Log.collection.getIndexes();
  console.log("Current indexes:", indexes);
  
  process.exit();
}

apply().catch(err => {
  console.error("❌ Failed:", err);
  process.exit(1);
});