import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { TweetModel } from "../../Types/TweetModel";
import style from "./Tweet.module.css";
import { faEllipsis } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import TweetSettings from "./TweetSettings";
import { useDeleteTweet } from "../../Hooks/index";
import ScreenLoader from "../ScreenLoader/ScreenLoader";
import { faHeart, faComment } from "@fortawesome/free-regular-svg-icons";
import { useNavigate } from "react-router-dom";
import {
  faRetweet,
  faChartSimple,
  faHeart as FillHeart,
} from "@fortawesome/free-solid-svg-icons";
import { usePopup } from "../../Hooks/index";
import { useApi } from "../../Hooks/index";
import NewPostArea from "../NewPostArea/NewPostArea";
import { useAuthContext } from "../../Hooks/index";
const Tweet = ({
  Images,
  contentText,
  publisher,
  _id,
  likesCount,
  createdAt,
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

  const getDateStamp = () => {
    const creationDate = new Date(createdAt);
    const currentDate = new Date();

    let stamp = "";
    if (
      currentDate.getMonth() === creationDate.getMonth() &&
      creationDate.getDate() === currentDate.getDate()
    ) {
      if (currentDate.getHours() === creationDate.getHours()) {
        stamp =
          (currentDate.getMinutes() - creationDate.getMinutes()).toString() +
          "m";
      } else
        stamp =
          (currentDate.getHours() - creationDate.getHours()).toString() + "h";
    } else {
      stamp =
        creationDate.toLocaleString("default", { month: "short" }).toString() +
        " " +
        creationDate.getDate();
    }
    return stamp;
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
          <div>
            <span style={{ marginRight: "20px" }}>{publisher.name}</span>
            {/* <span>{`@${publisher.id}`}</span> */}
            <span> {getDateStamp()}</span>
          </div>
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
        {Images.length > 0 && (
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gridTemplateRows: "300px min-content",
              border: "1px solid rgba(255,255,255,0.3)",
              borderRadius: "10px",
              justifyItems: "stretch",
              overflow: "hidden",
            }}
          >
            {Images.map((item, index) => (
              <img
                onLoad={() => {
                  setIsLoaded(true);
                }}
                loading="lazy"
                style={{
                  overflow: "hidden",
                  width: "100%",
                  height: "100%",
                  // height: "100%",
                  objectFit: "cover",
                }}
                key={index}
                src={item}
                alt=""
              />
            ))}
          </div>
        )}
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
