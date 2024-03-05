import { useState } from "react";
import { Todo } from "../types/Todo";
import { deleteTodo, fetchTodos, patchTodo, postTodo } from "../services/todoService";

export const useTodo = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const loadTodos = async () => {
    const data = await fetchTodos();
    setTodos(data);
  };

  const addTodo = async (todo: { id: string; text: string }) => {
    await postTodo({ ...todo, completed: false });
    loadTodos();
  };

  const removeTodo = async (id: string) => {
    await deleteTodo(id);
    loadTodos();
  };

  const updateTodo = async (id: string, completed: boolean) => {
    await patchTodo(id, { completed });
    loadTodos();
  };

  return { todos, addTodo, removeTodo, loadTodos, updateTodo };
};
