import { useContext } from "react";
import { authContext } from "../Context/AuthContext";

export const useAuthContext = () => {
  const context = useContext(authContext);
  return context;
};
