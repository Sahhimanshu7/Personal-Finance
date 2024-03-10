import express from "express";
const router = express.Router();

import { createExpense, deleteExpense } from "../controllers/expense.js";

router.route("/create-expense")
  .post(createExpense);

router.route("/delete-expense/:id")
  .delete(deleteExpense);

export default router;