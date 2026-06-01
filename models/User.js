import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  { name:     { type: String },
    email:    { type: String, unique: true },
    image:    { type: String },
    provider: { type: String },
  },
   { timestamps: true } // automatically add two fields created at and updated at
 
);

export default mongoose.models.User || mongoose.model("User", UserSchema);