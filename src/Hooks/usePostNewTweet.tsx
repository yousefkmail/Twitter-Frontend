import { useForm } from "react-hook-form";
import { useContext, useEffect, useState } from "react";
import { useApi } from "./useApi";
import { TweetsContext } from "../Context/TweetsContext";

type FormValues = {
  contentText: string;
  Images: File[];
};

export const usePostNewTweet = (superTweet?: string) => {
  const [canSubmit, setCanSubmit] = useState(false);
  const { dispatch } = useContext(TweetsContext);
  const [isLoading, setIsLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: {},
    watch,
    getValues,
    setValue,
    reset,
  } = useForm<FormValues>({
    defaultValues: {
      contentText: "",
      Images: [] as File[],
    },
  });

  useEffect(() => {
    const subscription = watch((e) => {
      console.log(e);
      if (e.Images?.length || e.contentText) {
        setCanSubmit(true);
      } else setCanSubmit(false);
    });
    return () => subscription.unsubscribe();
  }, [watch]);

  const deleteImage = (index: number) => {
    const array = Array.from(getValues("Images"));
    array.splice(index, 1);
    setValue("Images", array);
  };

  const { PostTweet } = useApi();

  const onSubmit = handleSubmit(async (data) => {
    setIsLoading(true);
    const formdata = new FormData();
    if (superTweet) {
      formdata.append("superTweet", superTweet);
    }
    formdata.append("contentText", data.contentText);
    var i = 0;
    for (i = 0; i < data.Images.length; i++) {
      formdata.append("Images" + i, data.Images[i]);
    }
    const result = await PostTweet(formdata);
    const dataa = await result.json();
    if (dataa.tweet.superTweet === undefined)
      dispatch({ type: "ADD_TWEET", payload: dataa.tweet });
    reset();
    setIsLoading(false);
  });

  return {
    onSubmit,
    register,
    canSubmit,
    watch,
    deleteImage,
    getValues,
    setValue,
    isLoading,
    getFiles: getValues("Images"),
  };
};
