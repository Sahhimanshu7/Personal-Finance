import express from "express";
const router = express.Router();
import { createUser, loginUser } from "../controllers/user.js";

router.route("/create-user")
  .post(createUser);

router.route("/login")
  .post(loginUser);

export default router;