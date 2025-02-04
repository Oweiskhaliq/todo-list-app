import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import todoModel from "./models/Todos.js";
dotenv.config();
import connectDB from "./config/DBConnection.js";
const app = express();
app.use(
  cors({
    credentials: true,
  })
);
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  return res.json("Server is running");
});

app.get("/get", (req, res) => {
  todoModel
    .find()
    .then((result) => res.json(result)) // ✅ Corrected variable name

    .catch((error) => res.json(error));
});

app.delete("/:todo_id", (req, res) => {
  const todo_id = req.params.todo_id;
  todoModel
    .deleteOne({ _id: todo_id })
    .then((result) =>
      res.json({ message: "Task deleted succfully.", task: result })
    ) // ✅ Corrected variable name

    .catch((error) => res.json(error));
});

app.post("/add", (req, res) => {
  const { task, date } = req.body;
  if (!task) {
    return res.json({ message: "please add the field." });
  }
  todoModel
    .create({
      task: task,
      date: date,
    })
    .then((result) =>
      res.json({
        message: "data save successfully",
        task: result,
      })
    ) // ✅ Corrected variable name
    .catch((error) => res.json({ error: error }));
});
const PORT = process.env.PORT || 3001;

(async () => {
  await connectDB();
  app.listen(PORT, () => {
    console.log(`Server is running on: http://localhost:${PORT}`);
  });
})();
