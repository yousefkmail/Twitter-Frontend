import { FunctionComponent } from "react";
import {
  DefaultPageDesign,
  Trends,
  UserPreviewCollection,
} from "../../../Components";
import { UseRecommendedAccountsContext } from "../../../Hooks";

interface FollowersProps {}

const Followers: FunctionComponent<FollowersProps> = () => {
  const { RecAccounts } = UseRecommendedAccountsContext();
  return (
    <DefaultPageDesign
      RightPartition={
        <>
          <UserPreviewCollection Users={RecAccounts} />
          <Trends />
        </>
      }
      LeftPartition={<div></div>}
    ></DefaultPageDesign>
  );
};

export default Followers;
