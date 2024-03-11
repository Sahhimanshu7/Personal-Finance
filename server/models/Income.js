import mongoose from "mongoose";

const IncomeSchema = new mongoose.Schema(
  {
    id: String,
    creator: String,
    users: Array,
    title: String,
    description: String,
    amount : Number,
    category: String,
  },
  { timestamps: true }
);

const Income = mongoose.model("Income", IncomeSchema);

export default Income;