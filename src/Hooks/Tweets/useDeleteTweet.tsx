import { useState } from "react";
import { useApi } from "../useApi";
import { TweetsContext } from "../../Context/TweetsContext";
import { useContext } from "react";
export const useDeleteTweet = (_id: string) => {
  const { DeleteTweet } = useApi();
  const { dispatch } = useContext(TweetsContext);
  const [isLoading, setIsLoading] = useState(false);
  const OnSubmit = async () => {
    setIsLoading(true);
    const result = await DeleteTweet(_id);
    if (result.ok) {
      const data = await result.json();
      dispatch({ type: "DELETE_TWEET", payload: { ...data } });
    }
    setIsLoading(false);
  };

  return { isLoading, OnSubmit };
};
