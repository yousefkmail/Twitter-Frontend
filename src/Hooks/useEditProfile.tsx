import { useForm } from "react-hook-form";
import { useApi } from "./useApi";
import { useAuthContext } from "./useAuthContext";
import { useState } from "react";

interface EditProfileType {
  icon?: File[];
  name?: string;
  coverImage?: File[];
}

export const useEditProfile = () => {
  const { EditProfile } = useApi();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { currentUser, setCurrentUser } = useAuthContext();
  const { register, handleSubmit } = useForm<EditProfileType>();
  const OnSubmit = handleSubmit(async (data) => {
    setIsLoading(true);
    const formdata = new FormData();
    if (data.name) formdata.append("name", data.name);
    if (data.icon) formdata.append("icon", data.icon[0]);
    if (data.coverImage) formdata.append("coverImage", data.coverImage[0]);
    const result = await EditProfile(formdata);
    const dataaa = await result.json();
    const dataa = { ...currentUser };

    dataa.name = dataaa.name;
    if (dataaa.icon) dataa.icon = dataaa.icon;
    if (dataaa.coverImage) dataa.coverImage = dataaa.coverImage;

    setCurrentUser(dataa);
    setIsLoading(false);
  });
  return { register, OnSubmit, isLoading };
};
