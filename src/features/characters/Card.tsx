import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

interface CardProps {
  id: number;
  status?: string;
  name?: string;
  location?: string;
  image: string;
}

const Card = React.memo(({ id, status, name, location, image }: CardProps) => {
  const navigate = useNavigate();
  const urlLocation = useLocation();

  const alive = "bg-green-600 ring-green-500 shadow-green-400 animate-pulse";
  const dead = "bg-red-800 ring-red-600 shadow-red-500";
  const unknown = "bg-gray-600 ring-gray-500 shadow-gray-500";
  let statusStyle = "";

  switch (status?.toLowerCase()) {
    case "alive":
      statusStyle = alive;
      break;
    case "dead":
      statusStyle = dead;
      break;
    default:
      statusStyle = unknown;
      break;
  }

  const handleClick = () => {
    navigate(`${urlLocation.pathname}/${id}`);
  };

  return (
    <div
      className="rounded-xl overflow-hidden relative min-h-[300px] cursor-pointer"
      onClick={handleClick}
    >
      <div className="w-full h-full absolute top-0 left-0 z-0 rounded-xl overflow-hidden">
        <img src={image} alt={name} className="object-cover w-full h-full" />
        <div className="bg-gradient-to-b from-slate-800 to-transparent to-60% h-full w-full absolute top-0 rounded-xl overflow-hidden" />
      </div>

      <div className="relative z-10 h-full flex flex-col justify-between rounded-xl overflow-hidden">
        <div className="p-2 text-white">
          <div className="text-xs">
            From:
            <br />
            <span className="text-sm">{location}</span>
          </div>
        </div>

        <div
          className="flex justify-between items-center gap-4 p-2 bg-gray-700 bg-opacity-40 backdrop-blur-md backdrop-saturate-50
            border-t border-t-slate-400 text-gray-200 text-sm rounded-b-xl overflow-hidden"
        >
          <h3 className="font-bold text-lg">{name}</h3>
          <div className="flex items-center gap-1">
            <span
              className={`w-3 h-3 inline-block rounded-full ring-inset ring-1 ring-opacity-50 shadow-inner ${statusStyle}`}
            />
            <span className="text-xs font-normal uppercase">{status}</span>
          </div>
        </div>
      </div>
    </div>
  );
});

export default Card;
