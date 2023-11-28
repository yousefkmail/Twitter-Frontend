import { FormEvent, useState } from "react";
import style from "./LoginPopup.module.css";
import { useLogin } from "../../../Hooks/useLogin";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";

interface LoginPopupProps {
  CloseWindow: () => void;
}

const LoginPopup = ({ CloseWindow }: LoginPopupProps) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useLogin();
  const handlesubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await login(email, password);
  };

  return (
    <div className={style["container"]}>
      <div className={style["inner-container"]}>
        <button style={{ borderRadius: "999px" }} onClick={CloseWindow}>
          <FontAwesomeIcon icon={faX} />
        </button>
        <div>
          <form
            style={{ display: "flex", flexDirection: "column" }}
            action=""
            onSubmit={handlesubmit}
          >
            <div style={{ padding: "100px" }}>
              <div>
                <input
                  className={style["input-field"]}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  type="email"
                  placeholder="Email"
                  id="email"
                />
                {/* <Error content={errors.name?.message} /> */}
              </div>
              <div>
                <input
                  className={style["input-field"]}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  type="password"
                  placeholder="password"
                  id="password"
                />
                {/* <Error content={errors.email?.message} /> */}
              </div>
            </div>
            <button type="submit">Log in</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPopup;
