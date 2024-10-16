import express from "express";
import colors from "colors";
import dotenv from "dotenv";
import morgan from "morgan";
import connectDB from "./config/db.js"; // تأكد من أن مسار هذا الملف صحيح
import cors from "cors"; // تأكد من أن هذا السطر هو في البداية

// configure env
dotenv.config();

// database config
connectDB().then(() => {
  console.log("Connected to MongoDB Database".green);
}).catch(err => {
  console.error("Error connecting to MongoDB:".red, err);
});

// rest object
const app = express();

// middlewares
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

// home route
app.get("/", (req, res) => {
  res.send("<h1>Welcome to ecommerce app</h1>");
});

// handle errors
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something broke!");
});

// PORT
const PORT = process.env.PORT || 8080;

// run listen
app.listen(PORT, () => {
  console.log(`⚡⚡⚡ Server is running on http://127.0.0.1:${PORT}`.blue);
});
