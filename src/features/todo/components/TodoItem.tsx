import { Button, Checkbox, List, Space } from "antd";
import { Todo } from "../types/Todo";

interface TodoItemProps {
  item: Todo;
  onRemove: (id: string) => void;
  onClickCompleted: (id: string, completed: boolean) => void;
}
export const TodoItem: React.FC<TodoItemProps> = ({ item, onRemove, onClickCompleted }) => {
  return (
    <List.Item>
      <Space>
        <Checkbox checked={item.completed} onChange={e => onClickCompleted(item.id, e.target.checked)} />
        <span>
          [{item.id}] {item.text}
        </span>

        <Button type="primary" danger size="small" onClick={() => onRemove(item.id)}>
          Remove
        </Button>
      </Space>
    </List.Item>
  );
};
