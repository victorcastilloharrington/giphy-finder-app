import { useMemo } from "react";
import { GIF_COUNT } from "../../constants";
import { range } from "../../utils/range";
import PageItem from "./PageItem";

type Props = {
  page: number;
  setPage: (page: number) => void;
  totalCount: number;
};

const Pagination = ({ page, setPage, totalCount }: Props) => {
  const maxPages = useMemo(
    () => (totalCount > 0 ? Math.min(totalCount / GIF_COUNT, 249) : null),
    [totalCount]
  );

  const pagesSelection = useMemo(() => {
    if (totalCount > 0 && maxPages) {
      return range(Math.max(page - 1, 2), Math.min(page + 10, maxPages || 10));
    } else {
      return [];
    }
  }, [page, totalCount, maxPages]);

  return (
    <div className="flex justify-center w-full gap-1 mt-6 mb-8">
      {pagesSelection?.length ? (
        <PageItem key={"firstPage"} page={page} setPage={setPage} index={1} />
      ) : null}
      {pagesSelection.map((p) => (
        <PageItem key={p} page={page} setPage={setPage} index={p} />
      ))}
      {maxPages ? (
        <PageItem
          key={"lastPage"}
          page={page}
          setPage={setPage}
          index={maxPages}
        />
      ) : null}
    </div>
  );
};

export default Pagination;
