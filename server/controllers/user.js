import User from "../models/User.js";
import bcryptjs from 'bcryptjs';

// registering new user
export const createUser = async (req,res) => {
  try {
    const salt = await bcryptjs.genSalt(10);
    const hashedPassword = await bcryptjs.hash(req.body.password, salt);

    // Creating the user
        try {
          const newUser = new User({
            userName: req.body.userName,
            password: hashedPassword,
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email
          });
          const user = await newUser.save();
          res.status(200).send(user + " signed up successfully!");
        } catch (error) {
          throw new Error("Error with creating newUser " + error);
      }
  } catch (error) {
    res.status(500).json("Error : " + error);
  }
}

// login 
export const loginUser = async (req,res) =>{
  try {
    const user = await User.findOne({userName:req.body.userName});
        if(user){
           const validPassword = await bcryptjs.compare(req.body.password, user.password);
          if(validPassword){
             res.status(200).json(user);
           }else{
             res.status(400).json("Wrong Password");
           }
        }else{
          res.status(400).json("Username not Found!");
        }
  } catch (error) {
    throw new Error("Error login" + error);
  }
}

// search for user
export const findUser = async (req,res) => {
  try {
    const user = await User.findOne({userName:req.params.userName});
    if(user){
      res.status(200).json("Username exists!");
    }else {
      res.status(400).json("Username not found!");
    }
  } catch (error) {
    res.send(500).json("No user found");
  }
}