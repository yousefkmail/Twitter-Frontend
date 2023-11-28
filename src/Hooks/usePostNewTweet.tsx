import { useForm } from "react-hook-form";
import { useContext, useState } from "react";
import { useApi } from "./useApi";
import { TweetsContext } from "../Context/TweetsContext";

type FormValues = {
  contentText: string;
  Images: [File];
};

export const usePostNewTweet = () => {
  const [canSubmit] = useState(true);
  const { dispatch } = useContext(TweetsContext);
  const {
    register,
    handleSubmit,
    formState: {},
  } = useForm<FormValues>();

  const { PostTweet } = useApi();

  const onSubmit = handleSubmit(async (data) => {
    const formdata = new FormData();
    formdata.append("contentText", data.contentText);
    var i = 0;
    for (i = 0; i < data.Images.length; i++) {
      formdata.append("Images" + i, data.Images[i]);
    }
    const result = await PostTweet(formdata);
    const dataa = await result.json();
    dispatch({ type: "ADD_TWEET", payload: dataa.tweet });
  });

  return { onSubmit, register, canSubmit };
};
