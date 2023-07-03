import { useEffect } from "react";
import useGetLocations from "../queries/useGetLocations";

export default function Locations() {
  const { data, isFetching, isSuccess, isError } = useGetLocations();

  useEffect(() => {
    if (isSuccess) console.log("%c Locations: ", "color:blue", data);
  }, [data, isSuccess]);

  return (
    <div>
      {isFetching && <div>Loading Locations...</div>}
      {isError && !isFetching && <div>Failed loading locations.</div>}
      {isSuccess && <div>Locations loaded. Check console log</div>}
    </div>
  );
}
