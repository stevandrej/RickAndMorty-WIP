import Spinner from "../components/Spinner";
import useGetCharacters from "../queries/useGetCharacters";
import CharactersList from "../features/characters/CharactersList";
import { ErrorBoundary } from "react-error-boundary";
import Pagination from "../components/Pagination";

export default function CharactersPage() {
  const { data, isLoading, isError, error } = useGetCharacters();

  if (isLoading) {
    return (
      <div className="h-[calc(100vh-56px)] flex items-center justify-center">
        <Spinner size="lg" />
      </div>
    );
  }

  return (
    <div className="py-12">
      <section className="max-w-6xl mx-auto">
        {isError ? (
          <ErrorBoundary
            fallback={<p>Something went wrong! Try reloading the page.</p>}
          >
            {error instanceof Error && (
              <div>
                <pre className="text-red-700">{error?.message}</pre>
                <p>Something went wrong! Try reloading the page.</p>
              </div>
            )}
          </ErrorBoundary>
        ) : (
          <>
            <CharactersList data={data} />
            <Pagination />
          </>
        )}
      </section>
    </div>
  );
}
