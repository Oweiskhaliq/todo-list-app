import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3001",
});

export const addTodoApi = async (addTodo) => {
  try {
    const response = await api.post("/add", addTodo);
    return response.data;
  } catch (error) {
    throw error.response?.data || error.message;
  }
};

export const getTodoApi = async () => {
  try {
    const response = await api.get("/get");
    return response.data;
  } catch (error) {
    throw error.response?.data || error.message;
  }
};

export const DeleteTodoApi = async (todo_id) => {
  try {
    const response = await api.delete(`/${todo_id}`);
    return response.data;
  } catch (error) {
    throw error.response?.data || error.message;
  }
};
