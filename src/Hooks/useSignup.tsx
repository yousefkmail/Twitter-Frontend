import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { authContext } from "../Context/AuthContext";
import { useForm } from "react-hook-form";
import { useApi } from "./useApi";
interface SignupProps {
  email: string;
  password: string;
  // Date of birth
  // {
  Dob: string;
  Mob: string;
  Yob: string;
  // }

  name: string;
}

export const useSignup = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [Error, setError] = useState("");
  const { setUser } = useContext(authContext);
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm<SignupProps>();
  const { signUp } = useApi();
  const OnSubmit = handleSubmit(
    async ({ email, name, password, Dob, Mob, Yob }) => {
      setIsLoading(true);
      const value = await signUp(
        JSON.stringify({
          email,
          password,
          name,
          dateOfBirth: `${Yob}-${Mob}-${Dob}`,
        })
      );
      const json = await value.json();
      if (value.ok) {
        setUser(json.token);
        localStorage.setItem("user", JSON.stringify(json.token));
        navigate("/home");
      } else {
        setError(json.Error);
      }
      setIsLoading(false);
    }
  );

  return { isLoading, Error, register, OnSubmit };
};
