import { useMutation, useQueryClient } from "@tanstack/react-query";
import { postTodo } from "../services/todoService";
import { queryKeys } from "../../../constants/queryKeys";

export const useCreateTodo = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (variables: { id: string; text: string }) =>
      postTodo({ id: variables.id, text: variables.text, completed: true }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [...queryKeys.todos] });
    },
  });
};
