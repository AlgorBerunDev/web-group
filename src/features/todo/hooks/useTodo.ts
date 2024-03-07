import { useCreateTodo } from "./useCreateTodo";
import { useDeleteTodo } from "./useDeleteTodo";
import { useFetchTodos } from "./useFetchTodos";
import { useUpdateTodo } from "./useUpdateTodo";

export const useTodo = () => {
  const queryFetchTodos = useFetchTodos();
  const createTodoMutation = useCreateTodo();
  const deleteTodoMutation = useDeleteTodo();
  const updateTodoMutation = useUpdateTodo();

  return {
    queryFetchTodos,
    createTodoMutation,
    deleteTodoMutation,
    updateTodoMutation,
  };
};
