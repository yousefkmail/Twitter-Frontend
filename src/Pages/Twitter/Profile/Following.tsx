import { FunctionComponent, useEffect, useState } from "react";
import {
  Back,
  DefaultPageDesign,
  ExtendedUserPreviewCollection,
  Trends,
  UserPreviewCollection,
} from "../../../Components";
import {
  UseRecommendedAccountsContext,
  useApi,
  useAuthContext,
} from "../../../Hooks";
const Following: FunctionComponent = () => {
  const { RecAccounts } = UseRecommendedAccountsContext();
  const { currentUser } = useAuthContext();
  const { GetFollowing } = useApi();

  const [following, setFollowing] = useState();
  useEffect(() => {
    FetchData();
  }, []);

  async function FetchData() {
    const data = await GetFollowing();
    console.log(data);
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
              <div>{currentUser.name}</div>
              <div>{`@${currentUser._id}`}</div>
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
