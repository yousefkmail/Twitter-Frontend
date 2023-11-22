import { Navigate, Outlet } from "react-router-dom";
import { useAuthContext } from "../Hooks/useAuthContext";

const AuthRoutes = () => {
  const { user, userLoaded } = useAuthContext();

  return userLoaded ? user ? <Outlet /> : <Navigate to={"/"} /> : <></>;
};

export default AuthRoutes;
