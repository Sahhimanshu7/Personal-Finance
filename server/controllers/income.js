import Income from "../models/Income.js";

export const createIncome = async (req, res) => {
  try {
    const newIncome = new Income({
      id: req.body.id,
      creator: req.body.creator,
      users: req.body.users,
      title: req.body.title,
      description: req.body.description,
      amount: req.body.amount,
      category: req.body.category,
    });
    const income = await newIncome.save();
    res.status(200).json(income);
  } catch (error) {
    res.status(500).json("Error with creating income: " + error);
  }
}

export const deleteIncome = async (req, res) => {
  try {
    const deleteIncome = Income.findOneAndDelete(req.params.id);
    res.status(200).json(deleteIncome);
  } catch (error) {
    res.status(500).json("Error deleting income: " + error);
  }
}