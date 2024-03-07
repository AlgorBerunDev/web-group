import { Card } from "antd";
import { TodoCreateForm } from "../components/TodoCreateForm";
import { TodoList } from "../components/TodoList";
import { useTodo } from "../hooks/useTodo";

export const TodoContainer = () => {
  const { queryFetchTodos, createTodoMutation, deleteTodoMutation, updateTodoMutation } = useTodo();

  return (
    <Card>
      {createTodoMutation.isSuccess && <h3>isSuccess</h3>}

      <TodoCreateForm
        onClickAdd={createTodoMutation.mutate}
        loading={createTodoMutation.isPending || queryFetchTodos.isFetching}
      />
      <br />
      <TodoList
        loading={queryFetchTodos.isLoading}
        todos={queryFetchTodos.data}
        onRemove={deleteTodoMutation.mutate}
        onClickCompleted={(id, completed) => updateTodoMutation.mutate({ id, completed })}
      />
    </Card>
  );
};
