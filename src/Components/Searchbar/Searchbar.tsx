import { faMagnifyingGlass, faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import style from "./Searchbar.module.css";
const Searchbar = () => {
  const [searchValue, setSearchValue] = useState("");
  const navigate = useNavigate();
  const [searchparams] = useSearchParams();
  const handleSubmit = (e: any) => {
    e.preventDefault();
    navigate({
      pathname: "/search",
      search: `s=${searchValue}`,
    });
  };

  useEffect(() => {
    setSearchValue(searchparams.get("s") ?? "");
  }, []);

  return (
    <div className={style["container"]}>
      <FontAwesomeIcon
        icon={faMagnifyingGlass}
        style={{ width: "50px", color: "grey" }}
      />
      <form style={{ flexGrow: "1" }} onSubmit={handleSubmit} action="">
        <input
          style={{ width: "100%" }}
          onChange={(e) => {
            setSearchValue(e.target.value);
          }}
          value={searchValue}
          className={style["input-field"]}
          placeholder="Search"
          type="text"
          name=""
          id=""
        />
      </form>
      {searchValue.length > 0 && <FontAwesomeIcon size="sm" icon={faX} />}
    </div>
  );
};

export default Searchbar;
