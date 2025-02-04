import { useState } from "react";
import { IoMdAddCircle } from "react-icons/io";
import { addTodoApi } from "../Api/Api.js";
import toast, { Toaster } from "react-hot-toast";

function AddApp({ setTodoItem }) {
  // handling the input field
  const [addTodo, setAddTodo] = useState({
    task: "",
    date: "",
  });

  const handlerChange = (e) => {
    setAddTodo({ ...addTodo, [e.target.name]: e.target.value });
  };

  const addTodoItems = async (e) => {
    e.preventDefault();
    try {
      const response = await addTodoApi(addTodo);
      toast.success(response.message);
      console.log(response);

      // Update Todo List UI
      setTodoItem((prev) => [...prev, response.task]);

      // Reset Form
      setAddTodo({
        task: "",
        date: "", // Fixed typo (was "data")
      });
    } catch (error) {
      console.log("Error:", error);
      toast.error("Failed to add task");
    }
  };

  return (
    <>
      <div className="container text-center">
        <form className="row" onSubmit={addTodoItems}>
          <div className="col-6">
            <input
              type="text"
              placeholder="Enter Todo here."
              name="task"
              value={addTodo.task}
              onChange={handlerChange}
            />
          </div>
          <div className="col-4">
            <input
              type="date"
              name="date"
              value={addTodo.date}
              onChange={handlerChange}
            />
          </div>
          <div className="col-2">
            <button type="submit" className="btn btn-success">
              <IoMdAddCircle />
            </button>
          </div>
        </form>
      </div>
      <Toaster />
    </>
  );
}

export default AddApp;
