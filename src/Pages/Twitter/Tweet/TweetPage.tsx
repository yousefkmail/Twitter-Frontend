import {
  Tweet,
  SearchBar,
  Trends,
  UserPreviewCollection,
} from "../../../Components/index";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useApi } from "../../../Hooks/index";
import { useAuthContext } from "../../../Hooks/index";
import { TweetModel } from "../../../Types/TweetModel";
import { UseRecommendedAccountsContext } from "../../../Hooks/index";

const TweetPage = () => {
  const { tweetId } = useParams();

  const { user } = useAuthContext();

  const { RecAccounts } = UseRecommendedAccountsContext();
  const [tweets, setTweets] = useState<TweetModel[]>([] as TweetModel[]);
  const [comments, setComments] = useState<TweetModel[] | undefined>();
  const { getTweet, getComments } = useApi();
  const fetchTweet = async (id: string) => {
    const result = await getTweet(id);
    const data = await result.json();
    const tweet = data.tweet;
    setTweets([tweet, ...tweets]);
  };

  useEffect(() => {
    if (tweets.length === 0) return;
    if (tweets[0].superTweet) {
      fetchTweet(tweets[0].superTweet);
    }
  }, [tweets]);

  const fetchComments = async (id: string) => {
    const asd = await getComments(id);
    const commentsdata = await asd.json();
    setComments(commentsdata.comments);
  };

  useEffect(() => {
    if (user && tweetId) {
      fetchTweet(tweetId);
      fetchComments(tweetId);
    }
  }, [user]);

  return (
    <div style={{ width: "100%", display: "flex" }}>
      <div
        style={{
          flexGrow: 1,
          maxWidth: "600px",
          borderLeft: "1px solid rgba(255,255,255,0.3)",
          borderRight: "1px solid rgba(255,255,255,0.3)",
        }}
      >
        {tweets && tweets.map((tweet) => <Tweet key={tweet._id} {...tweet} />)}
        {comments &&
          comments.map((comment) => (
            <div key={comment._id}>
              <Tweet {...comment} />
            </div>
          ))}
      </div>
      <div style={{ width: "40%", marginLeft: "60px" }}>
        <SearchBar />
        <Trends />
        <UserPreviewCollection Users={RecAccounts} />
      </div>
    </div>
  );
};

export default TweetPage;
