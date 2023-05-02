import axios, { AxiosResponse } from "axios";

const baseUrl: string = "http://localhost:5000/api";

export const getTodos = async (): Promise<AxiosResponse<ApiDataType>> => {
  try {
    const todos: AxiosResponse<ApiDataType> = await axios.get(
      baseUrl + "/todos"
    );
    return todos;
  } catch (error) {
    throw error;
  }
};

export const addTodo = async (
  formData: ITodo
): Promise<AxiosResponse<ApiDataType>> => {
  try {
    const todo: Omit<ITodo, "_id"> = {
      text: formData.text,
      isCompleted: false,
    };
    const saveTodo: AxiosResponse<ApiDataType> = await axios.post(
      baseUrl + "/todos",
      todo
    );
    return saveTodo;
  } catch (error) {
    throw error;
  }
};

export const updateTodo = async (
  todo: ITodo
): Promise<AxiosResponse<ApiDataType>> => {
  try {
    const todoUpdate: Pick<ITodo, "isCompleted"> = {
      isCompleted: true,
    };
    const updatedTodo: AxiosResponse<ApiDataType> = await axios.patch(
      `${baseUrl}/todos/${todo._id}`,
      todoUpdate
    );
    return updatedTodo;
  } catch (error) {
    throw error;
  }
};

export const deleteTodo = async (
  _id: string
): Promise<AxiosResponse<ApiDataType>> => {
  try {
    const deletedTodo: AxiosResponse<ApiDataType> = await axios.delete(
      `${baseUrl}/todos/${_id}`
    );
    return deletedTodo;
  } catch (error) {
    throw error;
  }
};
