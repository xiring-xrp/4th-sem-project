import mongoose from "mongoose";
import {} from 'dotenv/config'
const connectToDB = async () => {
  try {
    const { connection } = await mongoose.connect(process.env.MONGODB_URL);
    if (connection) {
      console.log(`connected to DB:${connection.host}`);
    }
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};
export default connectToDB;