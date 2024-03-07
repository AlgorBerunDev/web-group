import { Button, Flex, Form, Input } from "antd";

interface TodoCreateFormProps {
  loading: boolean;
  onClickAdd: ({ id, text }: { id: string; text: string }) => void;
}

export const TodoCreateForm: React.FC<TodoCreateFormProps> = ({ loading, onClickAdd }) => {
  return (
    <Form layout="inline" onFinish={onClickAdd}>
      <Flex align="flex-end">
        <Form.Item name="id">
          <Input placeholder="Input Identification" />
        </Form.Item>
        <Form.Item name="text">
          <Input placeholder="Input Text" />
        </Form.Item>
        <Button htmlType="submit" loading={loading} disabled={loading}>
          Add Task
        </Button>
      </Flex>
    </Form>
  );
};
