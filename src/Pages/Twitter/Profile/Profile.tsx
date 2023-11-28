import Back from "../../../Components/Buttons/Navlink/Back/Back";
import Trends from "../../../Components/Trends/Trends";
import WhoToFollow from "../../../Components/Whotofollow/WhoToFollow";
import { UseRecommendedAccountsContext } from "../../../Context/UseRecommendedAccountsContext";
import { Link, Outlet } from "react-router-dom";
import { useAuthContext } from "../../../Hooks/useAuthContext";
import { useState } from "react";
import EditProfile from "../../../Components/EditProfile/EditProfile";

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
  return (
    <div style={{ width: "100%", display: "flex" }}>
      <div
        style={{
          flexGrow: 1,
          maxWidth: "600px",
          borderLeft: "1px solid rgba(255,255,255,0.3)",
          borderRight: "1px solid rgba(255,255,255,0.3)",
        }}
      >
        <div>
          <Back />
          {currentUser?.name}
        </div>
        <div>
          <Link to={"/profile/following"}>
            {currentUser?.following.length + " Following"}
          </Link>
          <Link to={"/profile/followers"}>
            {currentUser?.followers.length + "Followers"}
          </Link>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <img
            style={{ width: "100px", height: "100px" }}
            src={currentUser?.icon}
            alt="No image"
          />
          <button onClick={OpenEditProfile}>Edit profile</button>
        </div>
        {IsEditingProfile && <EditProfile CloseWindow={CloseEditProfile} />}

        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <Link to={"/profile"} style={{ flexGrow: "1" }}>
            posts
          </Link>
          <Link to={"/profile/replies"} style={{ flexGrow: "1" }}>
            replies
          </Link>
          <Link to={"/profile/media"} style={{ flexGrow: "1" }}>
            media
          </Link>
          <Link to={"/profile/likes"} style={{ flexGrow: "1" }}>
            posts
          </Link>
        </div>
        <Outlet />
      </div>

      <div style={{ width: "40%", marginLeft: "60px" }}>
        <WhoToFollow RecAccounts={RecAccounts} />
        <Trends />
      </div>
    </div>
  );
};

export default Profile;
