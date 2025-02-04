import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import todoModel from "./models/Todos.js";
dotenv.config();
import connectDB from "./config/DBConnection.js";
const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  return res.json("Server is running");
});

app.post("/add", (req, res) => {
  todoModel
    .create({
      task: req.body.task,
    })
    .then((result) => res.json(result)) // ✅ Corrected variable name

    .catch((error) => res.json(error));
});
const PORT = process.env.PORT || 3001;

(async () => {
  await connectDB();
  app.listen(PORT, () => {
    console.log(`Server is running on: http://localhost:${PORT}`);
  });
})();
