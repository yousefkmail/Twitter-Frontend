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
    <div style={{ display: "grid", placeItems: "center" }}>
      <button onClick={() => setIsLoggingIn(true)}> log in </button>
      <button onClick={() => setIsSigningUp(true)}> sign up</button>

      {isLoggingIn && <LoginPopup CloseWindow={CloseLoggingIn} />}
      {isSigningUp && <SingupPopup CloseWindow={CloseSigningUp} />}
    </div>
  );
};

export default HomeNoUser;
