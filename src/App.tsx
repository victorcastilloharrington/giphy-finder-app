import { useMemo, useState } from "react";
import "./App.css";
import Search from "./components/Search/Search";
import useSearch from "./hooks/useSearch";
import Pagination from "./components/Pagination/Pagination";

function App() {
  const [search, setSearch] = useState<string>("");
  const [page, setPage] = useState<number>(1);
  const pageOffset = useMemo(() => (page - 1) * 20, [page]);
  const { data, error, loading } = useSearch({ search, pageOffset });

  return (
    <>
      <Search search={search} setSearch={setSearch} />
      {loading && <p>Loading...</p>}
      {error && <div>{error}</div>}
      {data?.data.length === 0 && search && <div>No results found</div>}
      {data?.data.length > 0 && (
        <div>
          {data.data.map((item: any) => (
            <img
              key={item.id}
              src={item.images.original.url}
              alt={item.title}
              style={{ maxWidth: 300 }}
            />
          ))}
          <Pagination
            page={page}
            setPage={setPage}
            totalCount={data.pagination.total_count}
          />
        </div>
      )}
    </>
  );
}

export default App;
