import { Card } from "antd";
import { useTodo } from "../hooks/useTodo";
import { TodoCreateForm } from "../components/TodoCreateForm";
import { TodoList } from "../components/TodoList";

export const TodoContainer = () => {
  const { todos, removeTodo, addTodo } = useTodo();

  return (
    <Card>
      <TodoCreateForm onClickAdd={addTodo} />
      <br />
      <TodoList todos={todos} onRemove={removeTodo} />
    </Card>
  );
};
