import { useMutation, useQueryClient } from "@tanstack/react-query";
import { patchTodo } from "../services/todoService";
import { queryKeys } from "../../../constants/queryKeys";

export const useUpdateTodo = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (variables: { id: string; completed: boolean }) =>
      patchTodo(variables.id, { completed: variables.completed }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [...queryKeys.todos] });
    },
  });
};
