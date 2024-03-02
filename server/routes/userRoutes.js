import express from "express";
const router = express.Router();
import { createUser, findUser, loginUser } from "../controllers/user.js";

router.route("/create-user")
  .post(createUser);

router.route("/login")
  .post(loginUser);

router.route('/:userName')
  .get(findUser);

export default router;