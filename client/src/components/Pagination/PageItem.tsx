type Props = {
  page: number;
  setPage: (page: number) => void;
  index: number;
};

const PageItem = ({ page, setPage, index }: Props) => {
  return (
    <div
      className={`flex items-center justify-center text-white cursor-pointer w-8 h-8 text-sm text-center rounded ${
        page === index ? "bg-slate-600" : "bg-slate-400"
      }`}
      key={`page-${index}`}
      onClick={() => setPage(index)}
    >
      {index}
    </div>
  );
};

export default PageItem;
