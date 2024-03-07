import { useQuery } from "@tanstack/react-query";
import { fetchTodos } from "../services/todoService";
import { queryKeys } from "../../../constants/queryKeys";

export const useFetchTodos = () => {
  return useQuery({
    queryKey: [...queryKeys.todos],
    queryFn: fetchTodos,
  });
};
