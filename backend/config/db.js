import mongoose from "mongoose";

export const connectDB = async ()=> {
   await mongoose.connect(
     "mongodb+srv://mayankSingh:9507769566@cluster0.lriig.mongodb.net/food-del")
     .then(()=>console.log('db connected'))
}