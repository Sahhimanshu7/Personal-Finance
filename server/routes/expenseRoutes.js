import express from "express";
const router = express.Router();

import { createExpense, deleteExpense, getExpense } from "../controllers/expense.js";

router.route("/create-expense")
  .post(createExpense);

router.route("/delete-expense/:id")
  .delete(deleteExpense);

router.route("/get-expense")
  .post(getExpense);

export default router;