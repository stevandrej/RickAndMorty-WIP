import { useQuery } from "@tanstack/react-query";
import { client } from "../services/client";
import { PaginatedApiResponse } from "../types/PaginatedApiResponse";
import { Character, CharacterFilter } from "../types/Character";

export default function useGetCharacters(
  page = 1,
  perPage = 50,
  filter: CharacterFilter = {}
) {
  const results = useQuery<PaginatedApiResponse<Character>>({
    queryKey: ["characters", page, perPage, { ...filter }],
    queryFn: () =>
      client("/character", {
        params: {
          page,
          perPage,
          ...filter,
        },
      }),
  });

  return { ...results };
}
