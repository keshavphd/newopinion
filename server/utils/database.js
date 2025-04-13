import mongoose from "mongoose"
import dotenv from "dotenv"
dotenv.config();
const connectDB = async()=>{
    try {
        const connected = await mongoose.connect(process.env.DB);
        if(connected){
            console.log("Database Successfully connected");
        }
    } catch (error) {
        console.log("Error in connecting database");
    }
}

export default connectDB;


// "mongodb+srv://keshav:keshav@cluster0fg.nn0vvdg.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0fg"