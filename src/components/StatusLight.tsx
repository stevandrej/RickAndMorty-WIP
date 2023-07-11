import { Status } from "../types/Status";

interface StatusLightProps {
  status?: Status;
}

export default function StatusLight({ status = "alive" }: StatusLightProps) {
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

  return (
    <span
      className={`w-3 h-3 inline-block rounded-full ring-inset ring-1 ring-opacity-50 shadow-inner ${statusStyle}`}
    />
  );
}
