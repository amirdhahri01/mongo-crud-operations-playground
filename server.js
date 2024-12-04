import express from "express";
import mongoose from "mongoose";
import { configDotenv } from "dotenv";
import Product from "./models/product.model.js";
configDotenv();
const app = express();
app.use(express.json());
app.get("/" , (req , res) => {
    res.status(200).json({
        name : "Amir Dhahri",
        age : 20
    })
})
app.post("/api/products" ,async(req , res)=>{
    try{
        const {name , quantity , price , image} = req.body;
        const product = await Product.create({name , quantity , price , image});
        res.status(201).json({message : "Product Created Successfully" , data:{product}})
    }catch(err){ 
        res.status(500).json({message : err.message})
    }
})

mongoose.connect(process.env.MONGO_URL_CONNECTION)
.then(() => {
    console.log("Connected to database!");
    app.listen(3000 , () => {
        console.log("Server is running on port 3000");
    })
})
.catch(() => {
    console.log("Connection Failed !");
})