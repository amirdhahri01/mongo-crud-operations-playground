import express from "express";
import mongoose from "mongoose";
import asyncHandler from "express-async-handler"
import { configDotenv } from "dotenv";
import Product from "./models/product.model.js";
configDotenv();
const app = express();
app.use(express.json());
const ProductRoutes = express.Router();
ProductRoutes.post("" , new asyncHandler(async(req , res)=>{
    const {name , quantity , price , image} = req.body;
    const product = await Product.create({name , quantity , price , image});
    res.status(201).json({message : "Product Created Successfully" , data:{product}})
})).get("" , async (req , res) => {
    const products = await Product.find();
    res.status(200).json({message : "Products Fetched Successfully" , data:{products}})
})
app.use("/api/products" , ProductRoutes)
app.use((req , res ,err) => {
    res.status(500).json({message : err.message})
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