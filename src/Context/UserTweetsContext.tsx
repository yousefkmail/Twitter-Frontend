import { createContext, useEffect, useState } from "react";
import { TweetModel } from "../Types/TweetModel";
import { useApi } from "../Hooks/index";
import { useAuthContext } from "../Hooks/index";

interface usertweetscontextProps {
  tweets: TweetModel[];
}

export const UserTweetsContext = createContext<usertweetscontextProps>({
  tweets: [],
});

export const UserTweetsContextProvider = ({ children }: any) => {
  const [tweets, setTweets] = useState([]);
  const { user } = useAuthContext();
  const { getUserTweets } = useApi();
  const fetchTweets = async () => {
    const result = await getUserTweets(0, 10);
    const data = await result.json();
    setTweets(data.tweets);
  };

  useEffect(() => {
    if (user) fetchTweets();
  }, [user]);

  return (
    <UserTweetsContext.Provider value={{ tweets }}>
      {children}
    </UserTweetsContext.Provider>
  );
};
