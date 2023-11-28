import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { TweetModel } from "../../Types/TweetModel";
import style from "./Tweet.module.css";
import { faEllipsis } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import TweetSettings from "./TweetSettings";
import { useDeleteTweet } from "../../Hooks/Tweets/useDeleteTweet";
import ScreenLoader from "../ScreenLoader/ScreenLoader";
import { faHeart, faComment } from "@fortawesome/free-regular-svg-icons";
import {
  faRetweet,
  faChartSimple,
  faHeart as FillHeart,
} from "@fortawesome/free-solid-svg-icons";
import { usePopup } from "../../Hooks/usePopup";
import { useApi } from "../../Hooks/useApi";
const Tweet = ({
  Images,
  contentText,
  publisher,
  _id,
  likesCount,
  isLiked,
}: TweetModel) => {
  const { OnSubmit, isLoading } = useDeleteTweet(_id);
  const { LikePost, unLikePost } = useApi();
  const { Show, Popup } = usePopup();
  const [isLikedState, setIsLiked] = useState(isLiked);
  const [loading, setisloading] = useState(false);

  const HandleLikePressed = async () => {
    if (loading) return;
    setisloading(true);
    if (isLikedState) {
      const result = await unLikePost(_id);
      if (result.ok) {
        setIsLiked(false);
      }
    } else {
      const result = await LikePost(_id);
      if (result.ok) {
        setIsLiked(true);
      }
    }
    setisloading(false);
  };

  const [showSettings, setShowSettings] = useState(false);
  const ShowSettings = () => {
    setShowSettings(true);
  };
  const HideSettings = () => {
    setShowSettings(false);
  };

  const deleteTweet = async () => {
    OnSubmit();
  };

  return (
    <div className={style["container"]}>
      {publisher.icon && (
        <img className={style["publisher-icon"]} src={publisher.icon} />
      )}
      <div style={{ flexGrow: "1" }}>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <span>{publisher.name}</span>
          <div style={{ position: "relative" }}>
            <div>
              <button onClick={ShowSettings}>
                <FontAwesomeIcon icon={faEllipsis} />
              </button>
            </div>
            {showSettings && (
              <TweetSettings
                DeleteTweet={deleteTweet}
                CloseWindow={() => HideSettings()}
              />
            )}
          </div>
        </div>
        <div>{contentText}</div>
        {Images.map((item, index) => (
          <img
            loading="lazy"
            style={{ width: "100%" }}
            key={index}
            src={item}
            alt=""
          />
        ))}

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            padding: "7px ",
          }}
        >
          <button onClick={() => Show("Functionality not implemented yet")}>
            <FontAwesomeIcon icon={faComment} />
          </button>
          <button onClick={HandleLikePressed}>
            <FontAwesomeIcon icon={isLikedState ? FillHeart : faHeart} />
            {likesCount}
          </button>
          <button onClick={() => Show("Functionality not implemented yet")}>
            <FontAwesomeIcon icon={faRetweet} />
          </button>
          <button onClick={() => Show("Functionality not implemented yet")}>
            <FontAwesomeIcon icon={faChartSimple} />
          </button>
        </div>
      </div>
      <Popup />
      {isLoading && <ScreenLoader />}
    </div>
  );
};

export default Tweet;
