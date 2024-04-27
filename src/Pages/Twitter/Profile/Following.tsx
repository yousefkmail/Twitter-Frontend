import { FunctionComponent, useEffect, useState } from "react";
import {
  Back,
  DefaultPageDesign,
  ExtendedUserPreviewCollection,
  Trends,
  UserPreviewCollection,
} from "../../../Components";
import { UseRecommendedAccountsContext, useApi } from "../../../Hooks";
import { useParams } from "react-router-dom";
import { user } from "../../../Types/user";
const Following: FunctionComponent = () => {
  const { RecAccounts } = UseRecommendedAccountsContext();
  const { id } = useParams();
  const { GetFollowing, GetUser } = useApi();
  const [user, setUser] = useState<user>();
  const [following, setFollowing] = useState();
  useEffect(() => {
    FetchData();
  }, []);

  async function FetchData() {
    const data = await GetFollowing(id);
    const user = await GetUser(id ?? "");
    setUser(user.user);
    setFollowing(data.users);
  }

  return (
    <DefaultPageDesign
      RightPartition={
        <>
          <UserPreviewCollection Users={RecAccounts} />
          <Trends />
        </>
      }
      LeftPartition={
        <div>
          <div style={{ display: "flex" }}>
            <Back />
            <div>
              <div>{user?.name}</div>
              <div>{`@${user?._id}`}</div>
            </div>
          </div>

          <div
            style={{
              paddingRight: "15px",
              paddingLeft: "15px",
              marginBottom: "10px",
              marginTop: "10px",
              display: "flex",
              borderBottom: "var(--main-border)",
            }}
          >
            <button style={{ flexGrow: "1" }}>{"Following"}</button>
            <button style={{ flexGrow: "1" }}>{"Followers"}</button>
          </div>
          <div>
            <ExtendedUserPreviewCollection Users={following} />
          </div>
        </div>
      }
    ></DefaultPageDesign>
  );
};

export default Following;
