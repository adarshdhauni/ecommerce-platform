import { useRouteError } from "react-router-dom";
import ErrorFallback from "@/components/errorFallback/ErrorFallback";

const RouteError = () => {
  const error = useRouteError();

  console.error(error);

  return <ErrorFallback />;
};

export default RouteError;
