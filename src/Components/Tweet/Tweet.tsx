import { TweetModel } from "../../Types/TweetModel";
import style from "./Tweet.module.css";

const Tweet = ({ Images, contentText, publisher }: TweetModel) => {
  return (
    <div className={style["container"]}>
      {publisher.icon && (
        <img className={style["publisher-icon"]} src={publisher.icon} />
      )}
      <div>
        {publisher.name}
        <div>{contentText}</div>
        {Images.map((item, index) => (
          <img style={{ width: "100%" }} key={index} src={item} alt="" />
        ))}
      </div>
    </div>
  );
};

export default Tweet;
