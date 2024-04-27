import { useParams } from "react-router-dom";
import { useApi, useAuthContext } from "../../../Hooks/index";
import ProfileOthers from "./ProfileOthers";
import ProfileSelf from "./ProfileSelf";
import { useEffect, useState } from "react";
import { user } from "../../../Types/user";

const Profile = () => {
  const { id } = useParams();
  const { currentUser } = useAuthContext();
  const { GetUser } = useApi();
  const [user, setUser] = useState<user>();
  useEffect(() => {
    FetchUser();
  }, []);

  useEffect(() => {
    console.log(user);
  }, [user]);

  async function FetchUser() {
    const result = await GetUser(id ?? "");
    setUser((await result.json()).user);
  }

  return id === currentUser._id ? (
    <ProfileSelf></ProfileSelf>
  ) : (
    <ProfileOthers user={user} />
  );
};

export default Profile;
