import mongoose from "mongoose";

const ExpenseSchema = new mongoose.Schema(
  {
    id: String,
    creater: String,
    users: Array,
    title: String,
    description: String,
    amount : Number,
    category: String,
  },
  {timestamps: true}
);

const Expense = mongoose.model("Expense", ExpenseSchema);

export default Expense;