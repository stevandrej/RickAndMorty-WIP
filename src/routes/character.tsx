import { useNavigate, useParams } from "react-router-dom";
import useGetCharacter from "../queries/useGetCharacter";
import PageSpinner from "../components/PageSpinner";
import PageErrorBoundary from "../components/PageErrorBoundary";
import PageBackdrop from "../components/PageBackdrop";
import StatusLight from "../components/StatusLight";

export default function Character() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { data, isLoading, isError, error } = useGetCharacter(id);

  if (isLoading) {
    return <PageSpinner />;
  }

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <>
      {isError ? (
        <PageErrorBoundary error={error} />
      ) : (
        <>
          <PageBackdrop image={data.image} />
          <div className="bg-gray-50/70 backdrop-blur-3xl rounded-xl p-8 min-h-[70vh]">
            <button onClick={handleBack}>Back</button>
            <div>
              <img src={data.image} alt={data.name} />
            </div>
            <div>
              <div>Name: {data.name}</div>
              <div>Species: {data.species}</div>
              <div>Location: {data.location.name}</div>
              <div>
                Status: <StatusLight status={data.status} /> {data.status}
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}
