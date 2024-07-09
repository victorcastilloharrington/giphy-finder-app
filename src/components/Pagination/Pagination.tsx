import React, { useEffect, useMemo, useState } from "react";
import { GIF_COUNT } from "../../constants";
import { range } from "../../utils/range";

type Props = {
  page: number;
  setPage: (page: number) => void;
  totalCount: number;
};

const Pagination = ({ page, setPage, totalCount }: Props) => {
  const totalPages = useMemo(
    () => (totalCount > 0 ? Math.ceil(totalCount / GIF_COUNT) : 1),
    [totalCount]
  );
  const pages = useMemo(() => range(1, totalPages), [totalPages]);
  return (
    <div style={{ display: "flex", flexWrap: "wrap" }}>
      {pages.map((p) => (
        <div
          key={p}
          onClick={() => setPage(p)}
          style={{
            minWidth: 20,
            color: "#000",
            backgroundColor: page === p ? "#bbb" : "#fff",
          }}
        >
          {p}
        </div>
      ))}
    </div>
  );
};

export default Pagination;
