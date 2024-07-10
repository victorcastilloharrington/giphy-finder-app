import { useMutation, useQuery } from "@apollo/client";
import {
  clearHistory,
  getSearchHistory,
} from "../graphql/queries/searchHistory";
import useUserId from "../hooks/useUserId";

const History = () => {
  const userId = useUserId()!;
  const [onClearHistory] = useMutation(clearHistory);
  const { data, error, loading, refetch } = useQuery(getSearchHistory, {
    variables: { userId },
    fetchPolicy: "network-only",
  });
  const isLoading = loading && !data;

  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Error: {error.message}</div>;
  }

  const handleClearHistory = async () => {
    await onClearHistory({ variables: { userId } });
    refetch();
  };
  return (
    <div>
      <table className="table-auto border-1 border-gray-300 w-full">
        <thead>
          <tr>
            <th className="border-2 border-gray-300">Search Term</th>
            <th className="border-2 border-gray-300">Date Added</th>
          </tr>
        </thead>
        <tbody>
          {data?.searchHistoryList?.map((item) => (
            <tr>
              <td className="border-2 border-gray-300">{item.queryString}</td>
              <td className="border-2 border-gray-300">{item.createdAt}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <button
        className="px-4 py-2 bg-red-500 text-white mt-4 rounded"
        onClick={handleClearHistory}
      >
        Clear History
      </button>
    </div>
  );
};

export default History;
