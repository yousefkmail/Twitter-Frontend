import { useForm } from "react-hook-form";
import { useState } from "react";
import { useApi } from "./useApi";

type FormValues = {
  contentText: string;
  Images: [File];
};

export const usePostNewTweet = () => {
  const [canSubmit] = useState(true);

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
    await PostTweet(formdata);
  });

  return { onSubmit, register, canSubmit };
};
