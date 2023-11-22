import Back from "../../../Components/Buttons/Navlink/Back/Back";
import Searchbar from "../../../Components/Searchbar/Searchbar";
import Trends from "../../../Components/Trends/Trends";
const Search = () => {
  return (
    <div style={{ width: "100%", display: "flex" }}>
      <div style={{ flexGrow: 1, maxWidth: "600px" }}>
        <div style={{ display: "flex" }}>
          <Back />
          <Searchbar />
        </div>
        <div style={{ width: "40%", marginLeft: "60px" }}>
          <Trends />
        </div>
      </div>
    </div>
  );
};

export default Search;
