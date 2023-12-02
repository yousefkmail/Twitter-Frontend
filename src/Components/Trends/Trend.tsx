import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import style from "./Trends.module.css";
import { useNavigate } from "react-router-dom";
import { faEllipsis } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { usePopup } from "../../Hooks/usePopup";
export interface TrendProps {
  title: string;
  tweetCount: number;
}

const Trend = ({ title, tweetCount }: TrendProps) => {
  const navigate = useNavigate();
  const { Show, Popup } = usePopup();

  const [settings, isSettingsShown] = useState(false);
  const handleClick = () => {
    navigate({
      pathname: "/search",
      search: `s=${title.slice(1)}`,
    });
  };

  return (
    <div onClick={handleClick} className={style["trend-container"]}>
      <div>{title}</div>
      <div>{tweetCount}</div>
      <div
        style={{
          position: "absolute",
          top: "0",
          right: "0",
          backgroundColor: "transparent",
        }}
      >
        <button
          style={{
            backgroundColor: "transparent",
          }}
          onClick={(e) => {
            e.stopPropagation();
            isSettingsShown(!settings);
          }}
        >
          <FontAwesomeIcon icon={faEllipsis} />
        </button>
        {
          <>
            {settings && (
              <div
                onClick={(e) => {
                  isSettingsShown(false);
                  e.stopPropagation();
                }}
                style={{
                  position: "fixed",
                  inset: "0",
                  zIndex: "100",
                }}
              ></div>
            )}

            <div
              onClick={(e) => {
                e.stopPropagation();
              }}
              style={{
                borderRadius: "7px",
                width: "300px",
                height: settings ? "84px" : "0",
                position: "absolute",
                top: "10px",
                right: "10px",
                transition: "all ease-in-out 0.2s",
                overflow: "hidden",
                zIndex: "100",
              }}
            >
              <div>
                <button
                  onClick={() => Show("functionality not implemented yet")}
                  style={{ width: "100%", borderRadius: "0" }}
                >
                  Not interested in this
                </button>
              </div>
              <div>
                <button
                  onClick={() => Show("functionality not implemented yet")}
                  style={{ width: "100%", borderRadius: "0" }}
                >
                  Harmful or spammy
                </button>
              </div>
            </div>
          </>
        }
      </div>
      <Popup />
    </div>
  );
};

export default Trend;
