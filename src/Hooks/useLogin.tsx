import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { authContext } from "../Context/AuthContext";
import { useApi } from "./useApi";
export const useLogin = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [Error, setError] = useState("");
  const { setUser, setUserProfilePic } = useContext(authContext);
  const navigate = useNavigate();
  const { Login } = useApi();
  const login = async (email: any, password: any) => {
    setIsLoading(true);

    const value = await Login(JSON.stringify({ email, password }));
    const json = await value.json();
    if (value.ok) {
      setUser(json.token);
      setUserProfilePic(json.profilePic);
      localStorage.setItem("user", JSON.stringify(json.token));
      navigate("/home");
    } else {
      setError(json.Error);
    }
    setIsLoading(false);
  };

  return { isLoading, login, Error };
};
