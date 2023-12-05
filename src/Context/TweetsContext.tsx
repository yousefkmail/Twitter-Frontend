import { Dispatch, createContext, useEffect, useReducer, useRef } from "react";
import { useApi } from "../Hooks/index";
import { TweetModel } from "../Types/TweetModel";
import { useAuthContext } from "../Hooks/index";
type TweetsContextProps = {
  tweets: TweetModel[];
  dispatch: Dispatch<any>;
};

export const TweetsContext = createContext({} as TweetsContextProps);

export const TweetsContextProvider = ({ children }: any) => {
  const { getTweets } = useApi();
  const { user } = useAuthContext();
  const isGettingTweets = useRef<boolean>(false);
  let currentPage = 0;
  let isLoading = false;
  const scrollPosition = useRef(0);
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

      case "ADD_TWEETS":
        return [...state, ...action.payload];

      default:
        return state;
    }
  };
  const [tweets, dispatch] = useReducer(tweetsReducer, []);

  async function handleScroll(this: Window) {
    // console.log(this.scrollY);
    // console.log(document.body.scroll);

    if (isLoading) return;

    if (
      window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight &&
      isGettingTweets
    ) {
      isLoading = true;

      const value = await getTweets(currentPage, 10);
      if (!value.ok) return;

      const json = await value.json();
      currentPage += 1;
      scrollPosition.current = this.window.scrollY;
      dispatch({ type: "ADD_TWEETS", payload: json.tweets });
      isLoading = false;
    }
  }

  useEffect(() => {
    window.scrollTo({ top: scrollPosition.current });
  }, [tweets]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [user]);

  const FetchTweets = async () => {
    const value = await getTweets(0, 10);
    const json = await value.json();
    currentPage = 1;
    dispatch({ type: "SET_TWEET", payload: json.tweets });
    isGettingTweets.current = true;
  };

  useEffect(() => {
    if (user) {
      FetchTweets();
    }
  }, [user]);

  return (
    <TweetsContext.Provider value={{ tweets, dispatch }}>
      {children}
    </TweetsContext.Provider>
  );
};
