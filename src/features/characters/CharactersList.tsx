import { memo } from "react";
import Card from "./Card";
import { PaginatedApiResponse } from "../../types/PaginatedApiResponse";
import { Character } from "../../types/Character";

interface CharactersListProps {
  data: PaginatedApiResponse<Character>;
}

const CharactersList = memo(function ({ data }: CharactersListProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {data.results.map((character) => (
        <Card
          key={character.id}
          image={character.image}
          name={character.name}
          status={character.status}
          location={character.location.name}
          action={() => {
            return;
          }}
        />
      ))}
    </div>
  );
});

export default CharactersList;
