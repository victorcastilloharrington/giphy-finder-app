import useFetch from "./useFetch";
import { GIPHY_API_KEY } from "../constants";
type Props = {
  search: string;
  pageOffset: number;
};

const useSearch = ({ search, pageOffset }: Props) => {
  const { data, error, loading } = useFetch({
    url: `https://api.giphy.com/v1/gifs/search?api_key=${GIPHY_API_KEY}&q=${search}&limit=20&offset=${pageOffset}`,
  });
  return { data, error, loading };
};

export default useSearch;
