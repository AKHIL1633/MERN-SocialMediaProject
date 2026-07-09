import mongoose from "mongoose"
import {DB_NAME} from "../constant";

const connectToDB=async () => {
    try {
        const connectionInstance=await mongoose.connect(
            `${process.env.MONGO_URL}/${DB_NAME}`,
        );
        console.log(`\n MongoDB connected successfully`)
    }catch(error){
        console.error("MongoDB connection Error:",error);
        process.exit(1);
    }
};
export default connectToDB