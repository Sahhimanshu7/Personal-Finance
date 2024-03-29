import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    firstName: String,
    lastName: String,
    userName: String,
    email: String,
    password: String
  },
  { timestamps: true }
);

const User = mongoose.model("User", UserSchema);

export default User;