import { Card } from "antd";
import { useTodo } from "../hooks/useTodo";
import { TodoCreateForm } from "../components/TodoCreateForm";
import { TodoList } from "../components/TodoList";
import { useEffect } from "react";

export const TodoContainer = () => {
  const { loading, todos, removeTodo, addTodo, loadTodos, updateTodo } = useTodo();

  useEffect(() => {
    loadTodos();
  }, []);

  return (
    <Card>
      <TodoCreateForm onClickAdd={addTodo} />
      <br />
      <TodoList loading={loading} todos={todos} onRemove={removeTodo} onClickCompleted={updateTodo} />
    </Card>
  );
};
