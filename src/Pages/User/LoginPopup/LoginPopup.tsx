import { FormEvent, useState } from "react";
import style from "./LoginPopup.module.css";
import { useLogin } from "../../../Hooks/useLogin";

interface LoginPopupProps {
  CloseWindow: () => void;
}

const LoginPopup = ({ CloseWindow }: LoginPopupProps) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login, Error } = useLogin();
  const handlesubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await login(email, password);
    console.log(Error);
  };

  return (
    <div className={style["inner-container"]}>
      <button onClick={CloseWindow}>close me</button>

      <div>
        <label htmlFor="">Logging in</label>
        <form action="" onSubmit={handlesubmit}>
          <label htmlFor="email">Email</label>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            id="email"
          />
          <label htmlFor="password">password</label>
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            id="password"
          />
          <button type="submit">Log in</button>
        </form>
      </div>
    </div>
  );
};

export default LoginPopup;
