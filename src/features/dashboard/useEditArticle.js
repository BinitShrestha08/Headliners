import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createEditArticle } from "../../services/apiNews";

export function useEditArticle() {
  const queryClient = useQueryClient();

  const { mutate, isLoading } = useMutation({
    mutationFn: ({ newArticleData, id }) =>
      createEditArticle(newArticleData, id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["articles"] });
    },
    onError: (err) => console.log(err.message),
  });

  return { mutate, isLoading };
}
