import { useParams } from "react-router-dom";
import Container from "../components/Layouts/Container";
import useGetCharacter from "../queries/useGetCharacter";
import PageSpinner from "../components/Layouts/PageSpinner";
import PageErrorBoundary from "../components/PageErrorBoundary";
import PageBackdrop from "../components/PageBackdrop";

export default function Character() {
  const { id } = useParams();
  const { data, isLoading, isError, error } = useGetCharacter(id);

  if (isLoading) {
    return <PageSpinner />;
  }

  return (
    <Container>
      {isError ? (
        <PageErrorBoundary error={error} />
      ) : (
        <>
          <PageBackdrop image={data.image} />
          <div className="bg-gray-50/70 backdrop-blur-3xl rounded-xl p-8 min-h-[70vh]">
            <div>Name: {data.name}</div>
          </div>
        </>
      )}
    </Container>
  );
}
