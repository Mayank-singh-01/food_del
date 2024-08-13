import express from "express";
import cors from "cors";
import { connectDB } from "./config/db.js";
import fodRouter from "./routes/foodRoute.js";


//app config
const app = express()
const port = 4000

//middleware
app.use(express.json())
app.use(cors())

//db connection
connectDB();

//api endpoints
app.use("/api/food",fodRouter)

app.get("/",(req,res)=>{
   res.send("hay, API is working")
})

app.listen(port,()=>{
   console.log(`server starder at  http://localhost:${port}`);
   
})