import dotenv from "dotenv";
dotenv.config();
import mongoose from "mongoose";


export const connectDB = async () => {
    try {
        await mongoose.connect(process.env.mongoURL).then(() => {
     console.log("Connected to MongoDB");
    }).catch((err) => {
        console.error("Error connecting to MongoDB:", err);
    });} catch (error) {
        console.error("Error connecting to MongoDB:", error);
    }};
