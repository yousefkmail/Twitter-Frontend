import { useState } from "react";
import LoginPopup from "./User/LoginPopup/LoginPopup";
import SingupPopup from "./User/SignupPopup/SignupPopup";

const HomeNoUser = () => {
  const [isLoggingIn, setIsLoggingIn] = useState(false);
  const [isSigningUp, setIsSigningUp] = useState(false);

  const CloseLoggingIn = () => {
    setIsLoggingIn(false);
  };
  const CloseSigningUp = () => {
    setIsSigningUp(false);
  };

  return (
    <div
      style={{
        display: "grid",
        placeItems: "center",
        width: "100vw",
        height: "100vh",
      }}
    >
      <div>
        <button
          style={{
            backgroundColor: "rgb(29, 155, 240)",
            borderRadius: "9999px",
            width: "300px",
          }}
          onClick={() => setIsSigningUp(true)}
        >
          sign up
        </button>

        <h4>Already have an account?</h4>
        <button
          style={{
            color: "rgb(29, 155, 240)",
            borderRadius: "9999px",
            width: "300px",
            border: "1px solid rgba(255, 255, 255,0.3)",
          }}
          onClick={() => setIsLoggingIn(true)}
        >
          log in
        </button>
      </div>
      {isLoggingIn && <LoginPopup CloseWindow={CloseLoggingIn} />}
      {isSigningUp && <SingupPopup CloseWindow={CloseSigningUp} />}
    </div>
  );
};

export default HomeNoUser;
