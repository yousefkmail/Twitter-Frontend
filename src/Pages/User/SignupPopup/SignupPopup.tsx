import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";
import style from "./SignupPopup.module.css";
import { useSignup } from "../../../Hooks/useSignup";
interface LoginPopupProps {
  CloseWindow: () => void;
}

const NumbersOptions = () => {
  const options = [];
  for (let i = 1; i < 31; i++) {
    options.push(
      <option key={i} value={i}>
        {i}
      </option>
    );
  }

  return options;
};

const YearOptions = () => {
  const options = [];
  for (let i = 2023; i > 1900; i--) {
    options.push(
      <option key={i} value={i}>
        {i}
      </option>
    );
  }

  return options;
};

const SingupPopup = ({ CloseWindow }: LoginPopupProps) => {
  const { register, OnSubmit } = useSignup();

  return (
    <div className={style["container"]}>
      <div className={style["inner-container"]}>
        <div style={{ display: "flex" }}>
          <button style={{ borderRadius: "999px" }} onClick={CloseWindow}>
            <FontAwesomeIcon icon={faX} />
          </button>
          <h3>Step 1 of 3</h3>
        </div>
        <div style={{ padding: "0px 80px" }}>
          <div style={{ padding: "20px 0", fontSize: "18px" }}>
            <h2>
              <span>Create your account</span>
            </h2>
          </div>
          <div>
            <form onSubmit={OnSubmit} action="">
              <div>
                <div>
                  <input
                    className={style["input-field"]}
                    {...register("name")}
                    placeholder="Name"
                    type="text"
                  />
                </div>
                <div>
                  <input
                    className={style["input-field"]}
                    {...register("email")}
                    placeholder="Email"
                    type="text"
                  />
                </div>
                <div>
                  <input
                    className={style["input-field"]}
                    {...register("password")}
                    placeholder="Password"
                    type="text"
                  />
                </div>
                <h4>DAte of birth</h4>
                <p>
                  This will not be shown publicly. Confirm your own age, even if
                  this account is for a business, a pet, or something else.
                </p>
                <div style={{ display: "flex" }}>
                  <select
                    style={{ flexGrow: "2" }}
                    {...register("Mob")}
                    name="Month"
                    id=""
                  >
                    <option value="1">January</option>
                    <option value="2">Feb</option>
                    <option value="3">Mar</option>
                    <option value="4">April</option>
                    <option value="5">May</option>
                    <option value="6">June</option>
                    <option value="7">July</option>
                    <option value="8">Aug</option>
                    <option value="9">Sep</option>
                    <option value="10">Oct</option>
                    <option value="11">Nov</option>
                    <option value="12">Dec</option>
                  </select>

                  <select
                    style={{
                      flexGrow: "1",
                      height: "40px",
                      margin: "0 10px",
                    }}
                    {...register("Dob")}
                    name="Day"
                    id=""
                  >
                    {NumbersOptions()}
                  </select>

                  <select
                    style={{ flexGrow: "1.5" }}
                    {...register("Yob")}
                    name="year"
                    id=""
                  >
                    {YearOptions()}
                  </select>
                </div>
              </div>
              <div style={{ flexGrow: "1" }}>
                <button>Next</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingupPopup;
