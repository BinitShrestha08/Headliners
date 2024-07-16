import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
  fetchArticles,
  fetchNewsApi,
  upsertArticle,
} from "../../services/apiNews";
import { useSearchParams } from "react-router-dom";
import { PAGE_SIZE } from "../../utils/constants";

// Hook for fetching articles from Supabase
export function useFetchArticles() {
  const queryClient = useQueryClient();
  const [searchParams] = useSearchParams();

  //pagination
  const page = !searchParams.get("page") ? 1 : Number(searchParams.get("page"));

  const {
    isLoading,
    data: { data, count } = {},
    error,
  } = useQuery({
    queryKey: ["articles", page],
    queryFn: () => fetchArticles({ page }),
  });

  const pageCount = Math.ceil(count / PAGE_SIZE);

  //pre-fetching
  if (page < pageCount)
    queryClient.prefetchQuery({
      queryKey: ["articles", page + 1],
      queryFn: () => fetchArticles({ page: page + 1 }),
    });

  if (page > 1)
    queryClient.prefetchQuery({
      queryKey: ["articles", page - 1],
      queryFn: () => fetchArticles({ page: page - 1 }),
    });

  return { isLoading, data, error, count };
}

// Hook for upserting articles into Supabase
export function useUpsertArticles() {
  const queryClient = useQueryClient();

  const { mutate, isLoading } = useMutation({
    mutationFn: async () => {
      const articles = await fetchNewsApi();
      for (const article of articles) {
        await upsertArticle(article);
      }
      return articles;
    },

    onSuccess: () => {
      queryClient.invalidateQueries("article");
    },
    onError: (err) => {
      console.log("Error", err);
    },
  });

  return { mutate, isLoading };
}
