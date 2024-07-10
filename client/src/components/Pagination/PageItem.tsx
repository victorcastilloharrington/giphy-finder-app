type Props = {
  page: number;
  setPage: (page: number) => void;
  index: number;
};

const PageItem = ({ page, setPage, index }: Props) => {
  return (
    <div
      key={`page-${index}`}
      onClick={() => setPage(index)}
      style={{
        minWidth: 20,
        color: "#000",
        backgroundColor: page === index ? "#dddddd" : "#fff",
        padding: 5,
        cursor: "pointer",
      }}
    >
      {index}
    </div>
  );
};

export default PageItem;
