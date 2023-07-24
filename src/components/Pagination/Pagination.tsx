import { useSearchParams } from "react-router-dom";
import PaginationItem from "./PaginationItem";
import { useCallback, useMemo } from "react";
import { determineDisplayedPages } from "./determineDisplayedPages";

interface PaginationProps {
  total: number;
}

export default function Pagination({ total }: PaginationProps) {
  const [searchParams, setSearchParams] = useSearchParams();
  const current = Number(searchParams.get("page") ?? 1);

  const handlePageChange = useCallback(
    (newPage: number) => {
      searchParams.set("page", newPage.toString());
      setSearchParams(searchParams);
    },
    [searchParams, setSearchParams]
  );

  const displayedPages = useMemo(
    () => determineDisplayedPages(total, current),
    [current, total]
  );

  return (
    <div className="mx-auto mt-12 max-w-lg">
      <ul className="flex justify-center text-center gap-1">
        {displayedPages.map((page) => {
          return (
            <PaginationItem
              key={`pagi-${page}`}
              page={page}
              handleClick={handlePageChange}
              isActive={page === current}
            />
          );
        })}
      </ul>
    </div>
  );
}
