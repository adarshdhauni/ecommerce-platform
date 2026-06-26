import { ErrorBoundary as ReactErrorBoundary } from "react-error-boundary";
import ErrorFallback from "../errorFallback/ErrorFallback";

const ErrorBoundary = ({ children }) => {
  return (
    <ReactErrorBoundary
      FallbackComponent={ErrorFallback}
      onReset={() => window.location.reload()}
    >
      {children}
    </ReactErrorBoundary>
  );
};

export default ErrorBoundary;