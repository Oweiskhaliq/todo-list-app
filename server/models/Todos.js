import mongoose from "mongoose";

const todoSchema = new mongoose.Schema({
  task: {
    type: String,
  },
});

const todoModel = mongoose.model("task", todoSchema);
export default todoModel;
