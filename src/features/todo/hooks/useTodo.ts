import { useState } from "react";
import { Todo } from "../types/Todo";

export const useTodo = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodo = (todo: { id: string; text: string }) => {
    setTodos(currentTodos => [{ ...todo, completed: false }, ...currentTodos]);
  };

  const removeTodo = (id: string) => {
    setTodos(currentTodos => [...currentTodos.filter(item => item.id !== id)]);
  };

  return { todos, addTodo, removeTodo };
};
