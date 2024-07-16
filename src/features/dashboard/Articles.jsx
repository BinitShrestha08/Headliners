import { useEffect } from "react";
import { useFetchArticles, useUpsertArticles } from "./useArticles";
import Spinner from "../../ui/Spinner";
import Article from "./Article";
import Pagination from "../../ui/Pagination";

function Articles() {
  const {
    isLoading: isFetching,
    data: articles,
    error,
    count,
  } = useFetchArticles();
  const { isLoading: isUpserting, mutate: upsertArticles } =
    useUpsertArticles();

  useEffect(() => {
    if (!isFetching && articles && articles.length === 0) {
      upsertArticles();
    }
  }, [articles, isFetching, upsertArticles]);

  if (isFetching || isUpserting) {
    return <Spinner />;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <>
      <h1 className="text-2xl font-bold mb-4">News Fetching Example</h1>
      {articles.length > 0 ? (
        <ul className="grid md:grid-cols-3 gap-4 mx-10">
          {articles.map((article) => (
            <Article key={article.id} article={article} />
          ))}
        </ul>
      ) : (
        <p>No articles available</p>
      )}
      <Pagination count={count} />
    </>
  );
}

export default Articles;
