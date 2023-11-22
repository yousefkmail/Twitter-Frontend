import style from "./Sidebar.module.css";
import { useLogout } from "../../Hooks/useLogout";
import Navlink from "../Buttons/Navlink/Navlink";
import {
  faHouse,
  faMagnifyingGlass,
  faList,
  faUserGroup,
} from "@fortawesome/free-solid-svg-icons";
import {
  faBell,
  faBookmark,
  faUser,
} from "@fortawesome/free-regular-svg-icons";
import { faXTwitter } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Sidebar = () => {
  const { logout } = useLogout();

  return (
    <div className={style["nav-container"]}>
      <FontAwesomeIcon
        style={{ marginLeft: "9px", marginTop: "5px", marginBottom: "5px" }}
        size="2x"
        icon={faXTwitter}
      />

      <Navlink icon={faHouse} to={"/home"}>
        Home
      </Navlink>
      <Navlink icon={faMagnifyingGlass} to={"/notifications"}>
        Notifications
      </Navlink>
      <Navlink icon={faBell} to={"/messages"}>
        Messages
      </Navlink>
      <Navlink icon={faList} to={"/lists"}>
        Lists
      </Navlink>
      <Navlink icon={faBookmark} to={"/bookmarks"}>
        Bookmarks
      </Navlink>
      <Navlink icon={faUserGroup} to={"/communities"}>
        Communities
      </Navlink>
      <Navlink icon={faUser} to={"/profile"}>
        Profile
      </Navlink>
      <button onClick={logout}>Log out</button>
    </div>
  );
};

export default Sidebar;
