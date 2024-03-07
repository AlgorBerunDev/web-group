import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteTodo } from "../services/todoService";
import { queryKeys } from "../../../constants/queryKeys";

export const useDeleteTodo = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: deleteTodo,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [...queryKeys.todos] });
    },
  });
};
