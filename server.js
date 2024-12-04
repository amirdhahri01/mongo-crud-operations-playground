import express from "express";
import mongoose from "mongoose";
import { configDotenv } from "dotenv";
configDotenv();
const app = express();

app.get("/" , (req , res) => {
    res.status(200).json({
        name : "Amir Dhahri",
        age : 20
    })
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