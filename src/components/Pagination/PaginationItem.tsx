import React from "react";

interface PaginationItemProps {
  page: number;
  handleClick: (page: number) => void;
  isActive: boolean;
}

const PaginationItem = React.memo(
  ({ page, handleClick, isActive }: PaginationItemProps) => {
    const activeClassName = isActive ? "bg-sky-600 text-white" : "";

    return (
      <li>
        <button
          className={`border border-slate-600 rounded-full flex items-center justify-center p-4 w-8 h-8 ${activeClassName}`}
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
