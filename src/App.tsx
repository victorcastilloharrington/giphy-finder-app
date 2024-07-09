import { useState } from "react";
import "./App.css";
import Search from "./components/Search/Search";
import useSearch from "./hooks/useSearch";

function App() {
  const [search, setSearch] = useState<string>("");
  const { data, error, loading } = useSearch({ search });

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
        </div>
      )}
    </>
  );
}

export default App;
