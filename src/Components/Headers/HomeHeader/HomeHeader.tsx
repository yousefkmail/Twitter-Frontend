import { useTranslation } from "react-i18next";
const HomeHeader = () => {
  const { t } = useTranslation();
  return (
    <div
      style={{
        paddingRight: "15px",
        paddingLeft: "15px",
        marginBottom: "10px",
        marginTop: "10px",
        display: "flex",
      }}
    >
      <button style={{ flexGrow: "1" }}>{t("FollowingLabel")}</button>
      <button style={{ flexGrow: "1" }}>{t("ForYouLabel")}</button>
    </div>
  );
};

export default HomeHeader;
