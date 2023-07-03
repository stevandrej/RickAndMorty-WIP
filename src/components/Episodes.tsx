import { useEffect } from "react";
import useGetEpisodes from "../queries/useGetEpisodes";

export default function Episodes() {
  const { data, isFetching, isSuccess, isError } = useGetEpisodes();

  useEffect(() => {
    if (isSuccess) console.log("%c Episodes: ", "color:magenta", data);
  }, [data, isSuccess]);

  return (
    <div>
      {isFetching && <div>Loading Episodes...</div>}
      {isError && !isFetching && <div>Failed loading episodes.</div>}
      {isSuccess && <div>Episodes loaded. Check console log</div>}
    </div>
  );
}
