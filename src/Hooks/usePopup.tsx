import { useState } from "react";
import PopUp from "../Components/PopUp/Popup";
export const usePopup = () => {
  const [isShowing, setIsShowing] = useState(false);

  const [message, setMessage] = useState<string>("");
  let OnConfirm = () => {};

  const Show = (messagee: string | undefined) => {
    setMessage(messagee ?? message);
    setIsShowing(true);
  };

  const Popup = () =>
    isShowing ? (
      <PopUp
        message={message}
        onConfirm={() => {
          OnConfirm();
          setIsShowing(false);
        }}
      />
    ) : (
      <></>
    );

  return { Show, Popup, setMessage, OnConfirm };
};
