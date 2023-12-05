import {
  DefaultPageDesign,
  Back,
  SearchBar,
  Trends,
  Tweets,
} from "../../../Components/index";
import { useContext } from "react";
import { TweetsContext } from "../../../Context/TweetsContext";
const Search = () => {
  return (
    <DefaultPageDesign
      LeftPartition={
        <>
          <div style={{ display: "flex" }}>
            <Back />
            <SearchBar />
          </div>
          <Tweets Tweets={useContext(TweetsContext).tweets} />
        </>
      }
      RightPartition={
        <div>
          <Trends />
        </div>
      }
    />
  );
};

export default Search;
