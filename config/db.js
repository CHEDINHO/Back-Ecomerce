import mongoose from "mongoose";
import colors from "colors";

// تعيين strictQuery إلى true أو false حسب احتياجاتك
mongoose.set('strictQuery', true); // أو false حسب ما تفضله

const connectDB = async () => {
  try {
    if (!process.env.MONGO_URL) {
      throw new Error("MONGO_URL is not defined in environment variables");
    }
    
    const conn = await mongoose.connect(process.env.MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    
    console.log(`Connected To MongoDB Database ${conn.connection.host}`.bgMagenta.white);
  } catch (error) {
    console.log(`Error in MongoDB: ${error}`.bgRed.white);
  }
};

export default connectDB;
