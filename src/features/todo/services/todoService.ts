import { httpClient } from "../../../utils/httpClient";
import { Todo } from "../types/Todo";

export const fetchTodos = async () => {
  const response = await httpClient.get("/todos");
  return response.data;
};

export const postTodo = async (todo: Todo) => {
  const response = await httpClient.post("/todos", todo);
  return response.data;
};

export const deleteTodo = async (id: string) => {
  const response = await httpClient.delete(`/todos/${id}`);
  return response.data;
};

export const patchTodo = async (id: string, todo: Partial<Todo>) => {
  const response = await httpClient.patch(`/todos/${id}`, todo);
  return response.data;
};
