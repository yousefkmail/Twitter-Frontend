import style from "./LoginPopup.module.css";
import { useLogin } from "../../../Hooks/index";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";
import { Error } from "../../../Components";
interface LoginPopupProps {
  CloseWindow: () => void;
}

const LoginPopup = ({ CloseWindow }: LoginPopupProps) => {
  const { errors, register, OnSubmit } = useLogin();

  return (
    <div className={style["container"]}>
      <div className={style["inner-container"]}>
        <button style={{ borderRadius: "999px" }} onClick={CloseWindow}>
          <FontAwesomeIcon icon={faX} />
        </button>
        <div>
          <form
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
            action=""
            onSubmit={OnSubmit}
          >
            <input
              {...register("email", { required: "Field is required" })}
              className={style["input-field"]}
              type="email"
              placeholder="Email"
            />
            <Error content={errors.email?.message} />

            <input
              {...register("password", { required: "Field is required" })}
              className={style["input-field"]}
              type="password"
              placeholder="password"
            />
            <Error content={errors.password?.message} />

            <button className={style["submit-button"]} type="submit">
              Log in
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPopup;
