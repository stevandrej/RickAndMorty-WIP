import Spinner from "../components/Spinner";
import useGetCharacters from "../queries/useGetCharacters";
import CharactersList from "../features/characters/CharactersList";
import { ErrorBoundary } from "react-error-boundary";
import Pagination from "../components/Pagination/Pagination";
import { useSearchParams } from "react-router-dom";

export default function CharactersPage() {
  const [searchParams] = useSearchParams();
  const currentPage = Number(searchParams.get("page") ?? 1);

  const { data, isLoading, isError, error } = useGetCharacters(currentPage);

  if (isLoading) {
    return (
      <div className="h-[calc(100vh-56px)] flex items-center justify-center">
        <Spinner size="lg" />
      </div>
    );
  }

  return (
    <div className="py-12 px-10 2xl:px-0">
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
            <Pagination total={data.info.pages} />
          </>
        )}
      </section>
    </div>
  );
}
