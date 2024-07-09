import useFetch from "./useFetch";
import { GIPHY_API_KEY } from "../constants";
type Props = {
  search: string;
};

const useSearch = ({ search }: Props) => {
  const { data, error, loading } = useFetch({
    url: `https://api.giphy.com/v1/gifs/search?api_key=${GIPHY_API_KEY}&q=${search}`,
  });
  return { data, error, loading };
};

export default useSearch;
