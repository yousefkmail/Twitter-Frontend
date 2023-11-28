import { Dispatch, createContext, useEffect, useReducer } from "react";
import { useApi } from "../Hooks/useApi";
import { TweetModel } from "../Types/TweetModel";
import { useAuthContext } from "../Hooks/useAuthContext";
type TweetsContextProps = {
  tweets: TweetModel[];
  dispatch: Dispatch<any>;
};

export const TweetsContext = createContext({} as TweetsContextProps);

export const TweetsContextProvider = ({ children }: any) => {
  const tweetsReducer = (state: TweetModel[], action: any): TweetModel[] => {
    switch (action.type) {
      case "SET_TWEET":
        return action.payload;

      case "DELETE_TWEET":
        // console.log(action.payload._id);

        // return state.filter((item) => {
        //   console.log(item._id);

        //   item._id === action.payload._id;
        // });
        const items: TweetModel[] = [];
        state.forEach((item) => {
          if (action.payload._id !== item._id) items.push(item);
        });
        return items;

      case "ADD_TWEET":
        return [action.payload, ...state];

      default:
        return state;
    }
  };

  const [tweets, dispatch] = useReducer(tweetsReducer, []);
  const { getTweets } = useApi();
  const { user } = useAuthContext();

  const FetchTweets = async () => {
    const value = await getTweets();
    const json = await value.json();
    console.log(json);
    dispatch({ type: "SET_TWEET", payload: json.tweets });
  };

  useEffect(() => {
    if (user) FetchTweets();
  }, [user]);

  return (
    <TweetsContext.Provider value={{ tweets, dispatch }}>
      {children}
    </TweetsContext.Provider>
  );
};
