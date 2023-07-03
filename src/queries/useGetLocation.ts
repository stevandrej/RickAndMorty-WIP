import { useQuery } from "@tanstack/react-query";
import { client } from "../services/client";

export default function useGetLocation(id: number) {
  const results = useQuery<Location>({
    queryKey: ["location", id],
    queryFn: () => client(`location/${id}`),
  });

  return { ...results };
}
