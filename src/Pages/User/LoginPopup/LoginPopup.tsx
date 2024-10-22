import style from "./LoginPopup.module.css";
import { useLogin } from "../../../Hooks/index";
import Cancel from "../../../Components/Buttons/Cancel/Cancel";
import {TextInputField} from "../../../Components";
interface LoginPopupProps {
  CloseWindow: () => void;
}

const LoginPopup = ({ CloseWindow }: LoginPopupProps) => {
  const { errors, register, OnSubmit } = useLogin();

  return (
    <div className={style["container"]}>
      <div className={style["inner-container"]}>
      <Cancel onClick={CloseWindow} ></Cancel>
        <div>
          <form
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
            onSubmit={OnSubmit}
          >
            <TextInputField {...register("email", { required: "Field is required" })} type="email" placeholder="Email" ErrorContent={errors.email?.message}  />
            <TextInputField {...register("password", { required: "Field is required" })} type="text"  placeholder="Password" ErrorContent={errors.password?.message}  />
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
