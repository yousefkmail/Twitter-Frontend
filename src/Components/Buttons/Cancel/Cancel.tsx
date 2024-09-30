import { faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { HTMLAttributes } from "react";

interface CancelProps extends HTMLAttributes<HTMLButtonElement>
{}

export default function Cancel({ onClick , children} : CancelProps) {
  return (
    <button style={{ borderRadius: "999px" }} onClick = {onClick}>
      {children ??
  <FontAwesomeIcon color="white" icon={faX} />}
  </button>
  )
}
