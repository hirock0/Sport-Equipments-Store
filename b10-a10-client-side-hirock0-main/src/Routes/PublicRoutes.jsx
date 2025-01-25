import { Navigate } from "react-router-dom";
import { useApiContext } from "../utils/ContextApi/ContextApi";
const PublicRoutes = ({ children }) => {
  const { loggedUser, loading } = useApiContext();
  if (loading) {
    return (
      <div className=" fixed left-0 right-0 bottom-0 top-0 flex items-center justify-center bg-zinc-100 z-40">
        <div className=" loading loading-spinner loading-lg bg-blue-600"></div>
      </div>
    );
  }
  if (loggedUser) {
    return <Navigate to={"/"}></Navigate>;
  }
  return <>{children}</>;
};

export default PublicRoutes;
