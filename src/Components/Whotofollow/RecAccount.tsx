import { useState } from "react";
import { RecommendedAccountType } from "../../Types/RecommendedAccountsType";
import Icon from "../Icon/Icon";
import { useApi } from "../../Hooks/index";
import { useTranslation } from "react-i18next";

const RecAccount = ({ _id, icon, name }: RecommendedAccountType) => {
  const { t } = useTranslation();

  const [isFollowing, setIsFollowing] = useState<boolean>(false);
  const { FollowAccount } = useApi();
  const handleClick = async () => {
    const data = { user: _id, followstatus: !isFollowing };
    const result = await FollowAccount(JSON.stringify(data));
    if (result.ok) {
      setIsFollowing(!isFollowing);
    }
  };

  return (
    <div
      style={{
        display: "flex",
        padding: "10px ",
        paddingLeft: "15px",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <div style={{ display: "flex", flexShrink: "1", flexGrow: "1" }}>
        <div
          style={{
            width: "50px",
            height: "50px",
          }}
        >
          <Icon iconsrc={icon} />
        </div>
        <div style={{ flexGrow: "1", flexShrink: "1" }}>
          <span style={{ paddingLeft: "10px" }}> {name}</span>
          {/* <span style={{ color: "grey", overflow: "hidden" }}>
            {" "}
            {`@${_id}`}
          </span> */}
        </div>
      </div>
      <button style={{ flexShrink: "0" }} onClick={handleClick}>
        {isFollowing ? t("UnFollowLabel") : t("FollowLabel")}
      </button>
    </div>
  );
};

export default RecAccount;
