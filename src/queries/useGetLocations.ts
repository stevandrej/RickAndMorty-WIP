import { useQuery } from "@tanstack/react-query";
import { client } from "../services/client";
import { PaginatedApiResponse } from "../types/PaginatedApiResponse";
import { LocationFilter } from "../types/Location";

export default function useGetLocations(
  page = 1,
  perPage = 50,
  filter: LocationFilter = {}
) {
  const results = useQuery<PaginatedApiResponse<Location>>({
    queryKey: ["locations", page, perPage, { ...filter }],
    queryFn: () =>
      client("/location", {
        params: {
          page,
          perPage,
          ...filter,
        },
      }),
  });

  return { ...results };
}
