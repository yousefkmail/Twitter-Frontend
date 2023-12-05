import { TweetModel } from "../../Types/TweetModel";
import Tweet from "./Tweet";

interface TweetsProps {
  Tweets: TweetModel[];
}

const Tweets = ({ Tweets }: TweetsProps) => {
  return (
    <div>
      {Tweets?.map((item: TweetModel) => (
        <Tweet {...item} key={item._id} />
      ))}
    </div>
  );
};

export default Tweets;
