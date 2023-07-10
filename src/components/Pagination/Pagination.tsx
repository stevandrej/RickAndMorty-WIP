import { useSearchParams } from "react-router-dom";
import PaginationItem from "./PaginationItem";
import { useCallback } from "react";

interface PaginationProps {
  total: number;
}

export default function Pagination({ total }: PaginationProps) {
  let pages: number[] = [];

  const [searchParams, setSearchParams] = useSearchParams();
  const current = Number(searchParams.get("page") ?? 1);

  const handlePageChange = useCallback(
    (newPage: number) => {
      searchParams.set("page", newPage.toString());
      setSearchParams(searchParams);
    },
    [searchParams, setSearchParams]
  );

  if (total > 10) {
    // Calculate the range of pages to display
    const startPage = Math.max(1, current - 5);
    const endPage = Math.min(startPage + 9, total);

    // Generate the array of page numbers to display
    pages = Array.from(
      { length: endPage - startPage + 1 },
      (_, index) => startPage + index
    );
  } else {
    // Generate the array of page numbers to display
    pages = Array.from({ length: total }, (_, index) => index);
  }

  return (
    <div className="mx-auto my-6 max-w-lg">
      <ul className="flex justify-center text-center gap-1">
        {pages.map((page) => {
          return (
            <PaginationItem
              key={page}
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
