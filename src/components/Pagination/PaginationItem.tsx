interface PaginationItemProps {
  page: number;
  handleClick: (page: number) => void;
  isActive: boolean;
}

export default function PaginationItem({
  page,
  handleClick,
  isActive,
}: PaginationItemProps) {
  return (
    <li
      className={`border border-slate-600 rounded-full p-4 w-8 h-8 flex items-center justify-center cursor-pointer ${
        isActive && "bg-sky-600 text-white"
      }`}
      onClick={() => handleClick(page)}
    >
      {page}
    </li>
  );
}
