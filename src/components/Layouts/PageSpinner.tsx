import Spinner from "../Spinner";

export default function PageSpinner() {
  return (
    <div className="h-[calc(100vh-56px)] flex items-center justify-center">
      <Spinner size="lg" />
    </div>
  );
}
