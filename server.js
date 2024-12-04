import http from "http"
import { configDotenv } from "dotenv";
import app from "./App/app.js";
import dbConnect from "./config/dbConnect.js";
configDotenv()

const PORT = process.env.PORT || 2020;

http.createServer(app).listen(PORT , () => {
    console.log(`The serve is running on port ${PORT}`);
})

dbConnect();
