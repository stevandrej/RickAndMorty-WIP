import React from "react";

interface CardProps {
  status?: string;
  name?: string;
  location?: string;
  image: string;
  action?: () => void;
}

const Card = React.memo(
  ({ status, name, location, image, action }: CardProps) => {
    return (
      <div
        className="rounded-xl overflow-hidden relative min-h-[300px] cursor-pointer"
        onClick={action}
      >
        <div className="w-full h-full absolute top-0 left-0 z-0">
          <img src={image} alt={name} className="object-cover w-full h-full" />
          <div className="bg-gradient-to-b from-slate-800 to-transparent to-60% h-full w-full absolute top-0" />
        </div>

        <div className="relative z-10 h-full flex flex-col justify-between">
          <div className="p-2 text-white">
            <div className="text-xs">
              From:
              <br />
              <span className="text-sm">{location}</span>
            </div>
          </div>

          <div
            className="flex justify-between items-center gap-4 p-2 bg-gray-700 bg-opacity-40 backdrop-blur-md backdrop-saturate-50
            border-t border-t-slate-400 text-gray-200 text-sm"
          >
            <h3 className="font-bold text-lg">{name}</h3>
            <p className="text-sm font-normal">{status}</p>
          </div>
        </div>
      </div>
    );
  }
);

export default Card;
