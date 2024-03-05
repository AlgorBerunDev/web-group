import { List } from "antd";
import { Todo } from "../types/Todo";
import { TodoItem } from "./TodoItem";

interface TodoProps {
  loading: boolean;
  todos: Todo[];
  onRemove: (id: string) => void;
  onClickCompleted: (id: string, completed: boolean) => void;
}

export const TodoList: React.FC<TodoProps> = ({ loading, todos, onRemove, onClickCompleted }) => {
  return (
    <List<Todo>
      size="small"
      bordered
      loading={loading}
      dataSource={todos}
      renderItem={item => <TodoItem item={item} onRemove={onRemove} onClickCompleted={onClickCompleted} />}
    />
  );
};
