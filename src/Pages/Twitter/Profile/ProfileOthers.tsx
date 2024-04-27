import { FunctionComponent, useEffect, useState } from "react";
import {
  Back,
  DefaultPageDesign,
  Trends,
  Tweets,
  UserPreviewCollection,
} from "../../../Components";
import { user } from "../../../Types/user";
import { Link, Outlet } from "react-router-dom";
import ProfileNavLink from "./ProfileNavLink";
import {
  UseRecommendedAccountsContext,
  useApi,
  useAuthContext,
} from "../../../Hooks";

interface ProfileOthersProps {
  user?: user;
}

const ProfileOthers: FunctionComponent<ProfileOthersProps> = ({ user }) => {
  const { getTweets } = useApi();

  const { RecAccounts } = UseRecommendedAccountsContext();
  const [tweets, setTweets] = useState<[]>([]);
  const [isFollowed, setIsFollowed] = useState<boolean>(false);
  const { currentUser } = useAuthContext();
  const { FollowAccount } = useApi();

  const HandleFollow = async () => {
    const data = { user: user?._id, followstatus: !isFollowed };
    const result = await FollowAccount(JSON.stringify(data));
    if (result.ok) {
      setIsFollowed(!isFollowed);
    }
  };
  useEffect(() => {
    if (!user) return;
    FetchTweets();
    // let value = user.followers.includes(currentUser._id);
    // setIsFollowed(value);
  }, [user?._id]);

  const FetchTweets = async () => {
    const result = await getTweets(0, 10, user?._id ?? "");
    const value = await result.json();
    setTweets(value.tweets);
  };
  return (
    <DefaultPageDesign
      LeftPartition={
        user !== undefined ? (
          <>
            {
              <div>
                <Back />
                {user?.name}
              </div>
            }
            <div style={{ height: "200px", backgroundColor: "grey" }}>
              {user?.coverImage && (
                <img
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    border: "0",
                  }}
                  src={user?.coverImage}
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
                {user?.icon && (
                  <img
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                    src={user?.icon}
                    alt="No image"
                  />
                )}
              </div>
              {
                <button onClick={HandleFollow}>
                  {" "}
                  {isFollowed ? "Unfollow" : "Follow"}{" "}
                </button>
                /* <button
              style={{
                marginRight: "20px",
                border: "1px solid rgba(255,255,255,0.2)",
                borderRadius: "9999px",
              }}
                onClick={OpenEditProfile}
            >
              Edit profile
            </button> */
              }
            </div>
            <div style={{ padding: "20px" }}>
              <div>{user?.name}</div>
              <div>{`@${user?._id}`}</div>
              {/* <div>{getJoinedDate()}</div> */}
              <div>
                <Link
                  style={{ marginRight: "20px", color: "white" }}
                  to={"/profile/following"}
                >
                  {user?.followingCount + " Following"}
                </Link>

                <Link style={{ color: "white" }} to={"/profile/followers"}>
                  {user?.followerCount + " Followers"}
                </Link>
              </div>
            </div>
            {/* {IsEditingProfile && <EditProfile CloseWindow={CloseEditProfile} />} */}

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
            <Tweets Tweets={tweets}></Tweets>
          </>
        ) : (
          <></>
        )
      }
      RightPartition={
        <>
          <UserPreviewCollection Users={RecAccounts} />
          <Trends />
        </>
      }
    />
  );
};

export default ProfileOthers;
