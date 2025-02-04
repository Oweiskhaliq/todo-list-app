import express from "express";
import mongoose from "mongoose";
import cors from "cors";

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  return res.json("Server is running");
});
const PORT = 3001 || process.env.PORT;
app.listen(PORT, () => {
  console.log("server is running on prot: http://localhost:", PORT);
});
