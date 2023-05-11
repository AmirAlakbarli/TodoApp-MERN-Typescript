import express, { Express } from "express";
import mongoose from "mongoose";
import cors from "cors";
import todoRoutes from "./routes";
import morgan from "morgan";
import dotenv from "dotenv";

dotenv.config({ path: "./config.env" });

const app: Express = express();

const PORT: string | number = process.env.PORT || 5000;

app.use(cors());

if (process.env.NODE_ENV == "development") {
  app.use(morgan("dev"));
}

app.use(express.json());
app.use("/api", todoRoutes);

const uri: string = `mongodb://mongodb:27017/${process.env.DB_NAME}`;

mongoose
  .connect(uri)
  .then(() =>
    app.listen(PORT, () =>
      console.log(`Server running on http://localhost:${PORT}`)
    )
  )
  .catch((error) => {
    throw error;
  });
