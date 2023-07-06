import Card from "../components/Card";
import Characters from "../components/Characters";
import useGetCharacters from "../queries/useGetCharacters";

export default function CharactersPage() {
  const { data, isFetching, isSuccess, isError } = useGetCharacters();

  return (
    <div className="py-12">
      <section className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {data?.results.map((character) => (
            <Card
              key={character.id}
              image={character.image}
              title={character.name}
              strap={character.status}
              description={character.location.name}
              action={() => {
                return;
              }}
            />
          ))}
        </div>
        <Characters />
      </section>
    </div>
  );
}
