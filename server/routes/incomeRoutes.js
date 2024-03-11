import express from "express";
const router = express.Router();

import { createIncome, deleteIncome } from "../controllers/expense.js";

router.route("/create-income")
  .post(createIncome);

router.route("/delete-income/:id")
  .delete(deleteIncome);

export default router;