import { Card } from "antd";
import { useTodo } from "../hooks/useTodo";
import { TodoCreateForm } from "../components/TodoCreateForm";
import { TodoList } from "../components/TodoList";
import { useEffect } from "react";

export const TodoContainer = () => {
  const { todos, removeTodo, addTodo, loadTodos, updateTodo } = useTodo();

  useEffect(() => {
    loadTodos();
  }, []);

  return (
    <Card>
      <TodoCreateForm onClickAdd={addTodo} />
      <br />
      <TodoList todos={todos} onRemove={removeTodo} onClickCompleted={updateTodo} />
    </Card>
  );
};
