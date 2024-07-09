type Props = {
  search: string;
  setSearch: (search: string) => void;
};

const Search = ({ search, setSearch }: Props) => {
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <input
        type="text"
        placeholder="Search..."
        onChange={(e) => setSearch(e.target.value)}
        value={search}
      />
      <button onClick={() => setSearch("")}>X</button>
    </div>
  );
};

export default Search;
