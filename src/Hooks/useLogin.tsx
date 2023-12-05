import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { authContext } from "../Context/AuthContext";
import { useApi } from "./useApi";
import { useForm } from "react-hook-form";
export const useLogin = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { setUser } = useContext(authContext);
  const navigate = useNavigate();
  const {
    handleSubmit,
    register,
    setError,
    formState: { errors },
  } = useForm<{ email: string; password: string }>();

  const { Login } = useApi();
  const OnSubmit = handleSubmit(async (data) => {
    await login(data.email, data.password);
  });
  const login = async (email: any, password: any) => {
    setIsLoading(true);

    const value = await Login(JSON.stringify({ email, password }));
    const json = await value.json();
    if (value.ok) {
      setUser(json.token);
      localStorage.setItem("user", JSON.stringify(json.token));
      navigate("/home");
    } else {
      setError(json.Error.field, {
        type: "custom",
        message: json.Error.message,
      });
    }
    setIsLoading(false);
  };

  return { isLoading, errors, register, OnSubmit };
};
