import useFetch from "./useFetch";
import { GIPHY_API_KEY } from "../constants";
import { useMutation } from "@apollo/client";
import { createHistoryEntry } from "../graphql/queries/searchHistory";
import useUserId from "./useUserId";
import { useEffect } from "react";
type Props = {
  search: string;
  pageOffset: number;
};

const useSearch = ({ search, pageOffset }: Props) => {
  const userId = useUserId()!;
  const [onCreateHistory] = useMutation(createHistoryEntry);

  const { data, error, loading } = useFetch({
    url: `https://api.giphy.com/v1/gifs/search?api_key=${GIPHY_API_KEY}&q=${search}&limit=20&offset=${pageOffset}`,
  });

  useEffect(() => {
    if (!search) return;
    onCreateHistory({ variables: { queryString: search, userId } });
  }, [search, userId, onCreateHistory]);

  return { data, error, loading };
};

export default useSearch;
