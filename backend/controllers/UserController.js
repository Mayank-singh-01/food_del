import userModel from "../models/UserModel.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import validator from "validator";


//login user 
const loginUser = async (req,res) => {
   const {email,password} = req.body;
   try {
      const user = await userModel.findOne({email});

      if (!user) {
         return res.json({success:false,massage:"User Dosn't exist with this emial"});
      }

      const isMatch = await bcrypt.compare(password,user.password);

      if (!isMatch) {
         return res.json({success:false,massage:"Invalid Password"});
      }

      const token = createToken(user._id);
      res.json({success:true,token})

   } catch (error) {
      console.log(error);
      res.json({success:false,massage:"Error while login"})
      
   }
}

//creat token 
const createToken = (id) => {
   return jwt.sign({ id }, process.env.JWT_SECRET);
}

// regidter user 
const registerUser = async (req,res) => {
   const {name,password,email} = req.body;
   try {

      //check for the existing user 
      const exist = await userModel.findOne({email});
      if(exist) {
         return res.json({success:false,massage:"user already exist"})
      }

      //validating email and strong password 
      if(!validator.isEmail(email)) {
         return res.json({ success: false, massage: "Please enter a valid email"});
      }
      if(password.length<8) {
         return res.json({success: false,massage: "Password showld be grater then 8 degit",});
      }

      //hassing user password 
      const salt = await bcrypt.genSalt(10)
      const hashedPassword = await bcrypt.hash(password,salt);

      const newUser = new userModel({
         name:name,
         email:email,
         password:hashedPassword
      })

      const user = await newUser.save();
      const token = createToken(user._id);
      res.json({success:true,token})

   } catch (error) {
      console.log(error);
      res.json({success:false,massage:"Error while registered user"})
      
   }
}


export {loginUser,registerUser}
