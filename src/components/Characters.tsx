import { useEffect } from "react";
import useGetCharacters from "../queries/useGetCharacters";

export default function Characters() {
  const { data, isFetching, isSuccess, isError } = useGetCharacters();

  useEffect(() => {
    if (isSuccess) console.log("%c Characters: ", "color:green", data);
  }, [data, isSuccess]);

  return (
    <div>
      {isFetching && <div>Loading Characters...</div>}
      {isError && !isFetching && <div>Failed loading characters.</div>}
      {isSuccess && <div>Characters loaded. Check console log</div>}
    </div>
  );
}
