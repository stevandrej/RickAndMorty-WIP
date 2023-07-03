import { useQuery } from "@tanstack/react-query";
import { client } from "../services/client";
import { Episode } from "../types/Episode";

export default function useGetEpisode(id: number) {
  const results = useQuery<Episode>({
    queryKey: ["episode", id],
    queryFn: () => client(`/episode.${id}`, {}),
  });

  return { ...results };
}
