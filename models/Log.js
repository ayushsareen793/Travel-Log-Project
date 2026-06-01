import mongoose from "mongoose";

const LogSchema = new mongoose.Schema(
  { title: { type: String, required: true },
    country: { type: String, required: true },
    city: { type: String },
    dateOfVisit: { type: Date },
    categories: [{ type: String }],
    coverPhoto: { type: String },
    about: { type: String },
    bestTimeToVisit: { type: String },
    howToGetThere: { type: String },
    hiddenGems: [{ type: String }],
    whereToEat: { type: String },
    whereToStay: { type: String },
    thingsToAvoid: { type: String },
    author: {
      name: { type: String },
      email: { type: String },
      image: { type: String },
      id: { type: String },
    },
  },
  { timestamps: true }

);

export default mongoose.models.Log || mongoose.model("Log", LogSchema);