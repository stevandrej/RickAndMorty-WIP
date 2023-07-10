import PaginationItem from "./PaginationItem";

interface PaginationProps {
  current: number;
  onChange: (newPage: number) => void;
  total: number;
}

export default function Pagination({
  current,
  onChange,
  total,
}: PaginationProps) {
  let pages: number[] = [];

  if (total <= 10) {
    pages = Array.from({ length: total }, (_, index) => index + 1);
  } else {
    const startPages = Array.from({ length: 3 }, (_, index) => index + 1);
    const endPages = Array.from({ length: 3 }, (_, index) => total - 2 + index);

    pages = [...startPages, ...endPages];
  }

  return (
    <div className="mx-auto my-6 max-w-lg">
      <ul className="flex justify-center text-center gap-1">
        {pages.map((page, index) => {
          if (index === 3 && total > 10) {
            return <li key="dots">...</li>;
          }
          return (
            <PaginationItem
              key={page}
              page={page}
              handleClick={onChange}
              isActive={page === current}
            />
          );
        })}
      </ul>
    </div>
  );
}
