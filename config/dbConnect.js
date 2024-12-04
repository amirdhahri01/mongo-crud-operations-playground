import mongoose from "mongoose";

const dbConnect = async () =>{
    try{
        mongoose.connect(process.env.MONGO_URL_CONNECTION)
        console.log("Connected to database!");
    }catch(err){
        console.log("Connection Failed !");
    }
}

export default dbConnect;