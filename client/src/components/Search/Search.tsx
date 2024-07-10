type Props = {
  search: string;
  setSearch: (search: string) => void;
};

const Search = ({ search, setSearch }: Props) => {
  return (
    <div className="flex justify-center w-full">
      <input
        type="text"
        placeholder="Search..."
        onChange={(e) => setSearch(e.target.value)}
        value={search}
        className="border-2 border-gray-300 p-2 w-2/3 rounded-l-md"
      />
      <button
        className="bg-red-500 text-white h-full p-3 px-6 rounded-r-md"
        onClick={() => setSearch("")}
      >
        X
      </button>
    </div>
  );
};

export default Search;
