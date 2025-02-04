import AppName from "./components/AppName";
import AddApp from "./components/AddApp";
import TodoItemsIn from "./components/TodoItemsIn";
import { useEffect, useState } from "react";
import ErrorMassage from "./components/ErrorMassage";
import toast, { Toaster } from "react-hot-toast";
import { DeleteTodoApi, getTodoApi } from "./Api/Api.js";
function App() {
  const [todoItem, setTodoItem] = useState([]);

  //get todos
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getTodoApi();
        setTodoItem(response);
      } catch (error) {
        console.error("Error fetching todos:", error);
      }
    };

    fetchData();
  }, []);
  // methods for delete items
  const handlerDeleteItem = async (deleteItem) => {
    try {
      const response = await DeleteTodoApi(deleteItem);
      toast.success(response.message);
      setTodoItem((prev) => prev.filter((todo) => todo._id !== deleteItem));
    } catch (error) {
      console.log("error", error);
    }
  };
  return (
    <>
      <center className="todo-container">
        <Toaster />
        <AppName />
        <AddApp setTodoItem={setTodoItem} />
        {todoItem.length == 0 && <ErrorMassage />}

        <TodoItemsIn onClickDelete={handlerDeleteItem} todoele={todoItem} />
      </center>
    </>
  );
}

export default App;
