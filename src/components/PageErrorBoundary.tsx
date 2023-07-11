import { ErrorBoundary } from "react-error-boundary";

export default function PageErrorBoundary({ error }: { error: unknown }) {
  return (
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
  );
}
