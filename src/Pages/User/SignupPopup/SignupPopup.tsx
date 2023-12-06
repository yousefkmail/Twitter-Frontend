import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";
import style from "./SignupPopup.module.css";
import { useSignup } from "../../../Hooks/index";
import Error from "../../../Components/error/Error";
import ComponentLoader from "../../../Components/ComponentLoader/ComponentLoad";
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
  const { register, OnSubmit, errors, isLoading } = useSignup();

  return (
    <div className={style["container"]}>
      <div className={style["inner-container"]}>
        <ComponentLoader
          Condition={!isLoading}
          Component={
            <div>
              <div style={{ display: "flex" }}>
                <button style={{ borderRadius: "999px" }} onClick={CloseWindow}>
                  <FontAwesomeIcon icon={faX} />
                </button>
              </div>
              <div style={{ padding: "0px min(80px, 10%)" }}>
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
                          {...register("name", {
                            required: "Field is required",
                          })}
                          placeholder="Name"
                          type="text"
                        />
                        <Error content={errors.name?.message} />
                      </div>
                      <div>
                        <input
                          className={style["input-field"]}
                          {...register("email", {
                            required: "Field is required",
                          })}
                          placeholder="Email"
                          type="email"
                        />
                        <Error content={errors.email?.message} />
                      </div>
                      <div>
                        <input
                          className={style["input-field"]}
                          {...register("password", {
                            required: "Field is required",
                          })}
                          placeholder="Password"
                          type="text"
                        />
                        <Error content={errors.password?.message} />
                      </div>
                      <h4>Date of birth</h4>
                      <p>
                        This will not be shown publicly. Confirm your own age,
                        even if this account is for a business, a pet, or
                        something else.
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
          }
        />
      </div>
    </div>
  );
};

export default SingupPopup;
