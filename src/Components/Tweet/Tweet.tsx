import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { TweetModel } from "../../Types/TweetModel";
import style from "./Tweet.module.css";
import { faEllipsis } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import TweetSettings from "./TweetSettings";
import { useDeleteTweet } from "../../Hooks/Tweets/useDeleteTweet";
import ScreenLoader from "../ScreenLoader/ScreenLoader";
import { faHeart, faComment } from "@fortawesome/free-regular-svg-icons";
import { useNavigate } from "react-router-dom";
import {
  faRetweet,
  faChartSimple,
  faHeart as FillHeart,
} from "@fortawesome/free-solid-svg-icons";
import { usePopup } from "../../Hooks/usePopup";
import { useApi } from "../../Hooks/useApi";
import NewPostArea from "../NewPostArea/NewPostArea";
import { useAuthContext } from "../../Hooks/useAuthContext";
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
  const [iscommenting, setIsCommenting] = useState(false);
  const navigate = useNavigate();
  const { currentUser } = useAuthContext();

  const [loaded, setIsLoaded] = useState(false);
  const HandleLikePressed = async () => {
    console.log(loading);
    if (loading) return;
    setisloading(true);
    if (isLikedState) {
      setIsLiked(false);
      const result = await unLikePost(_id);
      if (!result.ok) {
        setIsLiked(true);
      }
    } else {
      setIsLiked(true);
      const result = await LikePost(_id);
      if (!result.ok) {
        setIsLiked(false);
      }
    }
    setisloading(false);
  };

  useEffect(() => {
    if (Images.length < 1) setIsLoaded(true);
  }, []);

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

  console.log(loaded);
  return (
    <div
      onClick={() =>
        navigate({
          pathname: `/${currentUser._id}/${_id}`,
        })
      }
      className={style["container"]}
      style={{ opacity: loaded ? "1" : "0" }}
    >
      {publisher.icon && (
        <img className={style["publisher-icon"]} src={publisher.icon} />
      )}
      <div style={{ flexGrow: "1" }}>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <span>{publisher.name}</span>
          <div
            onClick={(e) => e.stopPropagation()}
            style={{ position: "relative" }}
          >
            <div>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  ShowSettings();
                }}
              >
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
            onLoad={() => {
              console.log("asd");
              setIsLoaded(true);
            }}
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
          <button
            onClick={(e) => {
              e.stopPropagation();
              setIsCommenting(true);
            }}
          >
            <FontAwesomeIcon icon={faComment} />
          </button>
          <button
            onClick={(e) => {
              HandleLikePressed();
              e.stopPropagation();
            }}
          >
            <FontAwesomeIcon icon={isLikedState ? FillHeart : faHeart} />
            {likesCount}
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              Show("Functionality not implemented yet");
            }}
          >
            <FontAwesomeIcon icon={faRetweet} />
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              Show("Functionality not implemented yet");
            }}
          >
            <FontAwesomeIcon icon={faChartSimple} />
          </button>
        </div>
      </div>
      <Popup />
      {isLoading && <ScreenLoader />}
      {iscommenting && (
        <div
          onClick={(e) => {
            e.stopPropagation();
            setIsCommenting(false);
          }}
          style={{
            position: "fixed",
            inset: "0",
            backgroundColor: "rgba(128,128,128,0.2)",
            zIndex: "1000",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <div style={{ width: "600px", position: "relative", top: "50px" }}>
            <NewPostArea superTweet={_id} />
          </div>
        </div>
      )}
    </div>
  );
};

export default Tweet;
