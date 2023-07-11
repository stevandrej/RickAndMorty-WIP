import { useQuery } from "@tanstack/react-query";
import { client } from "../services/client";
import { Character } from "../types/Character";

export default function useGetCharacter(id = "") {
  const results = useQuery<Character>({
    queryKey: ["character", id],
    queryFn: () => client(`/character/${id}`),
  });

  return { ...results };
}
