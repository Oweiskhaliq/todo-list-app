import mongoose from "mongoose";

const todoSchema = new mongoose.Schema({
  task: {
    type: String,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

const todoModel = mongoose.model("task", todoSchema);
export default todoModel;
