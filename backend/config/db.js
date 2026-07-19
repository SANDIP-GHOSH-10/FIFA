import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const fifaDB = () => {
    mongoose.connect(process.env.MONGO_URL)
    .then(() => {
        console.log("Database connected successfully");
    })
    .catch((err) => {
        console.log("Error connecting to database: ", err);
    });
}

export default fifaDB;