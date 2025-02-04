import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import todoModel from "./models/Todos.js";
dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  return res.json("Server is running");
});

mongoose.connect(process.env.MONGOOSE_URI);

app.post("/add", (req, res) => {
  todoModel
    .create({
      task: req.body.task,
    })
    .then((resut) => res.json(res))
    .catch((error) => res.json(error));
});

const PORT = 3001 || process.env.PORT;
app.listen(PORT, () => {
  console.log("server is running on prot: http://localhost:", PORT);
});
