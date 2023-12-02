import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { authContext } from "../Context/AuthContext";
import { user } from "../Types/user";
export const useLogout = () => {
  const { setUser, setCurrentUser } = useContext(authContext);
  const navigate = useNavigate();

  const logout = () => {
    setUser("");
    setCurrentUser({} as user);
    localStorage.removeItem("user");

    navigate("/");
  };

  return { logout };
};
