type Props = {
  search: string;
  setSearch: (search: string) => void;
};

const Search = ({ search, setSearch }: Props) => {
  return (
    <div>
      <input
        type="text"
        placeholder="Search..."
        onChange={(e) => setSearch(e.target.value)}
        value={search}
      />
    </div>
  );
};

export default Search;
