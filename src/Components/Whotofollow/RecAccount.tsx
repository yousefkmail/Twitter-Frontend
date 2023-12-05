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
        justifyContent: "space-between",
      }}
    >
      <div style={{ display: "flex" }}>
        <div style={{ width: "40px", marginRight: "7px" }}>
          <Icon iconsrc={icon} />
        </div>
        <span> {name}</span>
      </div>
      <button onClick={handleClick}>
        {isFollowing ? t("UnFollowLabel") : t("FollowLabel")}
      </button>
    </div>
  );
};

export default RecAccount;
