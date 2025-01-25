import { useApiContext } from "../utils/ContextApi/ContextApi";
import { Navigate, useLocation } from "react-router-dom";
const PrivateRoutes = ({ children }) => {
  const location = useLocation();
  const pathname = location.pathname;
  const { loading, loggedUser } = useApiContext();
  if (loading) {
    return (
      <div className=" fixed left-0 right-0 bottom-0 top-0 flex items-center justify-center bg-zinc-100 z-40">
        <div className=" loading loading-spinner loading-lg bg-blue-600"></div>
      </div>
    );
  }

  if (loggedUser) {
    return <div>{children}</div>;
  }

  return <Navigate state={pathname} to={"/user/login"}></Navigate>;
};

export default PrivateRoutes;
