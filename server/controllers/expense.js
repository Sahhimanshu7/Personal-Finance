import Expense from "../models/Expenses.js";

export const createExpense = async (req, res) => {
  try {
    const newExpense = new Expense({
      id: req.body.id,
      creator: req.body.creator,
      users: req.body.users,
      title: req.body.title,
      description: req.body.description,
      amount: req.body.amount,
      category: req.body.category,
    });
    const expense = await newExpense.save();
    res.status(200).json(expense);
  } catch (error) {
    res.status(500).json("Error with creating expense: " + error);
  }
}

export const deleteExpense = async (req, res) => {
  try {
    const deleteExpense = Expense.findOneAndDelete(req.params.id);
    res.status(200).json(deleteExpense);
  } catch (error) {
    res.status(500).json("Error deleting expense: " + error);
  }
}

export const getExpense = async (req, res) => {
  let expenses = [];

  try {
    const expenseRecords = await Expense.find();
    console.log(expenseRecords);
  } catch (error) {
    console.log(error);
  }
}