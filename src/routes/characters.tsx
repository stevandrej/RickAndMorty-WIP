import useGetCharacters from "../queries/useGetCharacters";
import CharactersList from "../features/characters/CharactersList";
import Pagination from "../components/Pagination/Pagination";
import { useSearchParams } from "react-router-dom";
import PageSpinner from "../components/PageSpinner";
import Grid from "../components/Layouts/Grid";
import PageErrorBoundary from "../components/PageErrorBoundary";

export default function CharactersPage() {
  const [searchParams] = useSearchParams();
  const currentPage = Number(searchParams.get("page") ?? 1);

  const { data, isLoading, isError, error } = useGetCharacters(currentPage);

  if (isLoading) {
    return <PageSpinner />;
  }

  return (
    <>
      {isError ? (
        <PageErrorBoundary error={error} />
      ) : (
        <>
          <Grid>
            <CharactersList data={data} />
          </Grid>
          <Pagination total={data.info.pages} />
        </>
      )}
    </>
  );
}
