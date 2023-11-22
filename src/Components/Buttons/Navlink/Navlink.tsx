import { ReactNode } from "react";
import { Link } from "react-router-dom";
import style from "./Navlink.module.css";
import { IconDefinition } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
interface NavlinkProps {
  to: string;
  children: ReactNode | null;
  icon: IconDefinition;
}

const Navlink = ({ to, children, icon }: NavlinkProps) => {
  return (
    <Link className={style["link"]} to={to}>
      <FontAwesomeIcon
        style={{ width: "25px", height: "25px", marginRight: "10px" }}
        icon={icon}
      ></FontAwesomeIcon>
      <div className={style["content"]}>{children}</div>
    </Link>
  );
};

export default Navlink;
