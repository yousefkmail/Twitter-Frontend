import style from "./Sidebar.module.css";
import { useAuthContext, useLogout } from "../../Hooks/index";
import { NavLink } from "../../Components/index";
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
  const { currentUser } = useAuthContext();
  return (
    <div className={style["nav-container"]}>
      <FontAwesomeIcon
        style={{ marginLeft: "9px", marginTop: "5px", marginBottom: "5px" }}
        size="2x"
        icon={faXTwitter}
      />

      <NavLink icon={faHouse} to={"/home"}>
        {t("HomeNavButton")}
      </NavLink>
      <NavLink icon={faMagnifyingGlass} to={"/explore"}>
        Explore
      </NavLink>
      <NavLink icon={faMagnifyingGlass} to={"/notifications"}>
        {t("NotificationNavButton")}
      </NavLink>
      <NavLink icon={faBell} to={"/messages"}>
        {t("MessagesNavButton")}
      </NavLink>
      <NavLink icon={faList} to={"/lists"}>
        {t("ListsNavButton")}
      </NavLink>
      <NavLink icon={faBookmark} to={"/bookmarks"}>
        {t("BookmarksNavButton")}
      </NavLink>
      <NavLink icon={faUserGroup} to={"/communities"}>
        {t("CommunitiesNavButton")}
      </NavLink>
      <NavLink icon={faUser} to={"/profile/" + currentUser._id}>
        {t("ProfileNavButton")}
      </NavLink>
      <button style={{color:"white"}} onClick={logout}>{t("LogOutLabel")}</button>
      <button style={{color:"white"}} onClick={() => i18n.changeLanguage("en")}>English</button>
      <button style={{color:"white"}} onClick={() => i18n.changeLanguage("ar")}>Arabic</button>
    </div>
  );
};

export default Sidebar;
