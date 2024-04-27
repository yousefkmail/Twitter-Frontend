import { useState } from "react";
import { UserPreviewProps } from "../../Types/UserPreviewProps";
import { Icon } from "..";
import { useApi } from "../../Hooks/index";
import { useTranslation } from "react-i18next";

const UserPreview = ({
  _id,
  icon,
  name,
  children,
  isFollowing,
}: UserPreviewProps) => {
  const { t } = useTranslation();

  const { FollowAccount } = useApi();
  const handleClick = async () => {
    const data = { user: _id, followstatus: !isFollowing };
    const result = await FollowAccount(JSON.stringify(data));
    if (result.ok) {
      // setFollowState(!isFollowing);
    }
  };

  return (
    <div>
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
        <button
          style={{
            flexShrink: "0",
            background: "var(--color-white)",
            color: "var(--color-black)",
          }}
          onClick={handleClick}
        >
          {isFollowing ? t("UnFollowLabel") : t("FollowLabel")}
        </button>
      </div>
      {children}
    </div>
  );
};

export default UserPreview;
