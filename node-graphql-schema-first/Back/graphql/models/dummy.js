import mongoose from "mongoose";
export const Dummy = mongoose.model("Dummy", {
  title: String,
  createdAt: Number,
  updatedAt: Number,
});
