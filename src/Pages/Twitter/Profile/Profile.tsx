import {
  Back,
  Trends,
  WhoToFollow,
  EditProfile,
  DefaultPageDesign,
} from "../../../Components/index";
import { UseRecommendedAccountsContext } from "../../../Hooks/index";
import { Link, Outlet } from "react-router-dom";
import { useAuthContext } from "../../../Hooks/index";
import { useState } from "react";
import ProfileNavLink from "./ProfileNavLink";

const Profile = () => {
  const { RecAccounts } = UseRecommendedAccountsContext();
  const { currentUser } = useAuthContext();
  const [IsEditingProfile, setIsEditingProfile] = useState<boolean>(false);

  const OpenEditProfile = () => {
    setIsEditingProfile(true);
  };

  const CloseEditProfile = () => {
    setIsEditingProfile(false);
  };

  const getJoinedDate = () => {
    const date = new Date(currentUser.createdAt);

    const currentMonthName = date.toLocaleString("default", { month: "long" });
    const currentYear = date.getFullYear();

    return `joined ${currentMonthName} ${currentYear}`;
  };

  console.log(currentUser?.createdAt);
  return (
    <DefaultPageDesign
      LeftPartition={
        <>
          <div>
            <Back />
            {currentUser?.name}
          </div>
          <div style={{ height: "200px", backgroundColor: "grey" }}>
            {currentUser.coverImage && (
              <img
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  border: "0",
                }}
                src={currentUser.coverImage}
                alt=""
              />
            )}
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "right",
              height: "100px",
              position: "relative",
              alignItems: "center",
            }}
          >
            <div
              style={{
                borderRadius: "9999px",
                overflow: "hidden",
                backgroundColor: "black",
                position: "absolute",
                top: "-70px",
                left: "40px",
                width: "140px",
                height: "140px",
              }}
            >
              {currentUser?.icon && (
                <img
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                  src={currentUser?.icon}
                  alt="No image"
                />
              )}
            </div>
            <button
              style={{
                marginRight: "20px",
                border: "1px solid rgba(255,255,255,0.2)",
                borderRadius: "9999px",
              }}
              onClick={OpenEditProfile}
            >
              Edit profile
            </button>
          </div>
          <div style={{ padding: "20px" }}>
            <div>{currentUser?.name}</div>
            <div>{`@${currentUser?._id}`}</div>
            <div>{getJoinedDate()}</div>
            <div>
              <Link
                style={{ marginRight: "20px", color: "white" }}
                to={"/profile/following"}
              >
                {currentUser?.following.length + " Following"}
              </Link>

              <Link style={{ color: "white" }} to={"/profile/followers"}>
                {currentUser?.followers.length + " Followers"}
              </Link>
            </div>
          </div>
          {IsEditingProfile && <EditProfile CloseWindow={CloseEditProfile} />}

          <div
            style={{
              display: "flex",
              justifyContent: "space-around",
              borderBottom: "1px solid rgba(255,255,255,0.2)",
            }}
          >
            <ProfileNavLink to="/profile/" content="Posts" />
            <ProfileNavLink to="/profile/replies" content="Replies" />
            <ProfileNavLink to="/profile/media" content="Media" />
            <ProfileNavLink to="/profile/likes" content="Likes" />
          </div>
          <Outlet />
        </>
      }
      RightPartition={
        <>
          <WhoToFollow RecAccounts={RecAccounts} />
          <Trends />
        </>
      }
    />
  );
};

export default Profile;
