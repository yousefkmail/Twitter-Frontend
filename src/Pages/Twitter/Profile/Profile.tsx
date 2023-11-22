import { useEffect, useState } from "react";
import Back from "../../../Components/Buttons/Navlink/Back/Back";
import Trends from "../../../Components/Trends/Trends";
import WhoToFollow from "../../../Components/Whotofollow/WhoToFollow";
import { UseRecommendedAccountsContext } from "../../../Context/UseRecommendedAccountsContext";
import { useApi } from "../../../Hooks/useApi";
import { Link, Outlet } from "react-router-dom";

const Profile = () => {
  const { RecAccounts } = UseRecommendedAccountsContext();
  const { GetCurrentUser } = useApi();
  const [currentuser, setCurrentUser] = useState<any>();
  const FetchUser = async () => {
    const result = await GetCurrentUser();
    setCurrentUser(result.user);
  };

  useEffect(() => {
    FetchUser();
  }, []);

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
          {currentuser?.name}
        </div>
        <div>
          <Link to={"/profile/following"}>
            {currentuser?.following.length + " Following"}
          </Link>
          <Link to={"/profile/followers"}>
            {currentuser?.followers.length + "Followers"}
          </Link>
        </div>
        <div>
          <img src={currentuser?.icon} alt="" />
        </div>
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
