import { useSearchParams } from "react-router-dom";
import PaginationItem from "./PaginationItem";
import { useCallback, useMemo } from "react";

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

  const determineDisplayedPages = useCallback(() => {
    if (total > 15) {
      // Navigation first 5 pages
      if (current < 5) {
        const firstPages = [1, 2, 3, 4, 5];
        const lastPages = Array.from(
          { length: 3 },
          (_, index) => total - index
        ).reverse();
        return [...firstPages, ...lastPages];
      }

      // Navigation last 5 pages
      else if (current <= total && current > total - 4) {
        const firstPages = [1, 2, 3];
        const lastPages = Array.from(
          { length: 5 },
          (_, index) => total - index
        ).reverse();
        return [...firstPages, ...lastPages];
      }

      // Navigation above fifth page and last (total-5) pages [1, 2, 3, 4, 5 ... 36, 37, 38, 39, 40]
      else {
        const firstPages = [1, 2, 3];
        const lastPages = Array.from(
          { length: 3 },
          (_, index) => total - index
        ).reverse();
        const middlePages = [
          current - 2,
          current - 1,
          current,
          current + 1,
          current + 2,
        ];

        return [...new Set([...firstPages, ...middlePages, ...lastPages])];
      }
    } else {
      return Array.from({ length: total }, (_, index) => index);
    }
  }, [current, total]);

  const displayedPages = useMemo(determineDisplayedPages, [
    determineDisplayedPages,
  ]);

  return (
    <div className="mx-auto mt-12 max-w-lg">
      <ul className="flex justify-center text-center gap-1">
        {displayedPages.map((page) => {
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
