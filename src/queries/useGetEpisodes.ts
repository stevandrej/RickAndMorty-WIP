import { useQuery } from "@tanstack/react-query";
import { client } from "../services/client";
import { PaginatedApiResponse } from "../types/PaginatedApiResponse";
import { Episode, EpisodeFilter } from "../types/Episode";

export default function useGetEpisodes(
  page = 1,
  perPage = 50,
  filter: EpisodeFilter = {}
) {
  const results = useQuery<PaginatedApiResponse<Episode>>({
    queryKey: ["episodes", page, perPage, { ...filter }],
    queryFn: () =>
      client("/episode", {
        params: {
          page,
          perPage,
          ...filter,
        },
      }),
  });

  return { ...results };
}
