import { Item } from "../../types";

type Props = {
  loading: boolean;
  data: Item[];
  error: string | null;
  search?: string;
};

const GifItem = ({ loading, data, error, search }: Props) => {
  return (
    <div>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      {data?.length === 0 && search && !loading && <div>No results found</div>}
      {data?.length > 0 && (
        <div>
          {data?.map((item) => (
            <img
              key={item.id}
              src={item.images.original.url}
              alt={item.title}
              style={{ maxWidth: 300 }}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default GifItem;
