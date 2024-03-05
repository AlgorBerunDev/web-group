import { List } from "antd";
import { Todo } from "../types/Todo";
import { TodoItem } from "./TodoItem";

interface TodoProps {
  todos: Todo[];
  onRemove: (id: string) => void;
}

export const TodoList: React.FC<TodoProps> = ({ todos, onRemove }) => {
  return (
    <List<Todo>
      size="small"
      bordered
      dataSource={todos}
      renderItem={item => <TodoItem item={item} onRemove={onRemove} />}
    />
  );
};
