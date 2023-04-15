import dotenv from "dotenv"
import mongoose from "mongoose"

dotenv.config()

mongoose.connect(process.env.MONGO_URL)
.then(()=>console.log("connected to database"))
.catch(err=>console.log(err))