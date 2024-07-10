import { useMemo, useState } from "react";
import Search from "../components/Search/Search";
import useSearch from "../hooks/useSearch";
import Pagination from "../components/Pagination/Pagination";
import GifItem from "../components/GifItem/GifItem";
import { GIF_COUNT } from "../constants";
import { useDebounce } from "../hooks/useDebounce";
function Home() {
  const [search, setSearch] = useState<string>("");
  const [page, setPage] = useState<number>(1);
  const pageOffset = useMemo(() => (page > 1 ? page * GIF_COUNT : 0), [page]);
  const searchQuery = useDebounce(search, 500);

  const { data, error, loading } = useSearch({
    search: searchQuery,
    pageOffset,
  });

  return (
    <>
      <Search search={search} setSearch={setSearch} />
      <GifItem
        loading={loading}
        data={data?.data}
        error={error}
        search={searchQuery}
      />
      <Pagination
        page={page}
        setPage={setPage}
        totalCount={data?.pagination?.total_count}
      />
    </>
  );
}

export default Home;
