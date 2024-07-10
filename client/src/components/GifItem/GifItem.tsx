import { Item } from "../../types";

type Props = {
  loading: boolean;
  data: Item[];
  error: string | null;
  search?: string;
};

const GifItem = ({ loading, data, error, search }: Props) => {
  return (
    <div className="flex items-center justify-center text-lg my-8">
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      {data?.length === 0 && search && !loading && <div>No results found</div>}
      {data?.length > 0 && (
        <div className="flex flex-wrap gap-2 justify-center">
          {data?.map((item) => (
            <img
              className="max-w-32 md:max-w-60"
              key={item.id}
              src={item.images.original.url}
              alt={item.title}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default GifItem;
