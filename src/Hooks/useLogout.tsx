import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { authContext } from "../Context/AuthContext";
export const useLogout = () => {
  const { setUser } = useContext(authContext);
  const navigate = useNavigate();

  const logout = () => {
    setUser("");
    localStorage.removeItem("user");

    navigate("/");
  };

  return { logout };
};
