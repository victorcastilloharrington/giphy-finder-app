import { useQuery } from "@apollo/client";
import { getSearchHistory } from "../graphql/queries/searchHistory";
import useUserId from "../hooks/useUserId";

const History = () => {
  const userId = useUserId()!;
  const { data, error, loading } = useQuery(getSearchHistory, {
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
    </div>
  );
};

export default History;
