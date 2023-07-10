import React from "react";

interface PaginationItemProps {
  page: number;
  handleClick: (page: number) => void;
  isActive: boolean;
}

const PaginationItem = React.memo(
  ({ page, handleClick, isActive }: PaginationItemProps) => {
    const activeClassName = isActive
      ? "bg-sky-700 text-white"
      : "text-sky-700 ";

    return (
      <li>
        <button
          className={`shadow-md shadow-sky-700/50
            ring-1 ring-opacity-20 ring-sky-700 
            rounded-full flex items-center justify-center p-4 w-8 h-8 ${activeClassName}`}
          disabled={isActive}
          onClick={() => handleClick(page)}
        >
          {page}
        </button>
      </li>
    );
  }
);

export default PaginationItem;
