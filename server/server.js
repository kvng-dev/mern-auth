import express from "express";
import cors from "cors";
import { configDotenv } from "dotenv";
import cookieParser from "cookie-parser";
import connectDB from "./config/mongodb.js";
import authRoute from "./routes/authRoute.js";
import userRoute from "./routes/userRoute.js";
import path from "path";
configDotenv();

const app = express();

const __dirname = path.resolve();

const port = process.env.PORT || 3000;

connectDB();

const allowedOrigins = ["http://localhost:5173"];

app.use(express.json());
app.use(cookieParser());
app.use(cors({ origin: allowedOrigins, credentials: true }));
app.use("/api/auth", authRoute);
app.use("/api/user", userRoute);



if (process.env.NODE_ENV === "production") {
  const staticPath = path.join(__dirname, "client", "dist");
  console.log("Serving static files from:", staticPath); // 👈 Log the static path
  app.use(express.static(staticPath));

  app.get("*", (req, res) => {
    const filePath = path.resolve(__dirname, "client", "dist", "index.html");
    console.log("Serving index.html from:", filePath); // 👈 Log the file path
    res.sendFile(filePath);
  });
}

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
