import { useQuery } from "@tanstack/react-query";
import { client } from "../services/client";
import { PaginatedApiResponse } from "../types/PaginatedApiResponse";
import { Character, CharacterFilter } from "../types/Character";

export default function useGetCharacters(
  page = 1,
  filter: CharacterFilter = {}
) {
  const results = useQuery<PaginatedApiResponse<Character>>({
    queryKey: ["characters", page, { ...filter }],
    queryFn: () =>
      client("/character", {
        params: {
          page,
          ...filter,
        },
      }),
  });

  return { ...results };
}
