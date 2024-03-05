import { useState } from "react";
import { Todo } from "../types/Todo";
import { deleteTodo, fetchTodos, patchTodo, postTodo } from "../services/todoService";

export const useTodo = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const loadTodos = async () => {
    setLoading(true);
    const data = await fetchTodos();
    setTodos(data);
    setLoading(false);
  };

  const addTodo = async (todo: { id: string; text: string }) => {
    setLoading(true);
    await postTodo({ ...todo, completed: false });
    loadTodos();
  };

  const removeTodo = async (id: string) => {
    setLoading(true);
    await deleteTodo(id);
    loadTodos();
  };

  const updateTodo = async (id: string, completed: boolean) => {
    setLoading(true);
    await patchTodo(id, { completed });
    loadTodos();
  };

  return { loading, todos, addTodo, removeTodo, loadTodos, updateTodo };
};
