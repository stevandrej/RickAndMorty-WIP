import { memo } from "react";
import Card from "./Card";
import { PaginatedApiResponse } from "../../types/PaginatedApiResponse";
import { Character } from "../../types/Character";

interface CharactersListProps {
  data: PaginatedApiResponse<Character>;
}

const CharactersList = memo(function ({ data }: CharactersListProps) {
  return (
    <>
      {data.results.map((character) => (
        <Card
          key={character.id}
          id={character.id}
          image={character.image}
          name={character.name}
          status={character.status}
          location={character.location.name}
        />
      ))}
    </>
  );
});

export default CharactersList;
