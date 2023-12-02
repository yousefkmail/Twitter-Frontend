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
import { useTranslation } from "react-i18next";

const Sidebar = () => {
  const { logout } = useLogout();
  const { i18n, t } = useTranslation();
  return (
    <div className={style["nav-container"]}>
      <FontAwesomeIcon
        style={{ marginLeft: "9px", marginTop: "5px", marginBottom: "5px" }}
        size="2x"
        icon={faXTwitter}
      />

      <Navlink icon={faHouse} to={"/home"}>
        {t("HomeNavButton")}
      </Navlink>
      <Navlink icon={faMagnifyingGlass} to={"/notifications"}>
        {t("NotificationNavButton")}
      </Navlink>
      <Navlink icon={faBell} to={"/messages"}>
        {t("MessagesNavButton")}
      </Navlink>
      <Navlink icon={faList} to={"/lists"}>
        {t("ListsNavButton")}
      </Navlink>
      <Navlink icon={faBookmark} to={"/bookmarks"}>
        {t("BookmarksNavButton")}
      </Navlink>
      <Navlink icon={faUserGroup} to={"/communities"}>
        {t("CommunitiesNavButton")}
      </Navlink>
      <Navlink icon={faUser} to={"/profile"}>
        {t("ProfileNavButton")}
      </Navlink>
      <button onClick={logout}>Log out</button>
      <button onClick={() => i18n.changeLanguage("en")}>English</button>
      <button onClick={() => i18n.changeLanguage("ar")}>Arabic</button>
    </div>
  );
};

export default Sidebar;
