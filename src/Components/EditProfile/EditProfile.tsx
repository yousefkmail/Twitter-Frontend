import { useAuthContext } from "../../Hooks/index";
import { useEditProfile } from "../../Hooks/index";
import { ComponentLoader } from "../../Components/index";
import { useEffect, useRef, useState } from "react";
import { faCamera, faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Cancel from "../Buttons/Cancel/Cancel";
interface EditProfileProps {
  CloseWindow: () => void;
}

const EditProfile = ({ CloseWindow }: EditProfileProps) => {
  const { currentUser } = useAuthContext();

  const { register, OnSubmit, isLoading, watch, getValues } = useEditProfile();

  const { ref: coverImageReff, ...rest } = register("coverImage");

  const { ref: iconReff, ...resst } = register("icon");
  const coverImageRef = useRef<HTMLInputElement | null>(null);
  const iconRef = useRef<HTMLInputElement | null>(null);

  const [coverImage, setCoverImage] = useState<File[] | undefined>();
  const [iconImage, setIconImage] = useState<File[] | undefined>();

  useEffect(() => {
    const subscription = watch(() => {
      // console.log(Array.from(getValues("icon") ?? []));
      // console.log(Array.from(getValues("coverImage") ?? []));
      const array = [...Array.from(getValues("icon") ?? [])];
      const secondArray = [...Array.from(getValues("coverImage") ?? [])];
      console.log(array, secondArray);
      setCoverImage(secondArray);
      setIconImage(array);
    });

    return () => subscription.unsubscribe();
  }, [watch]);

  return (
    <div
      style={{
        position: "fixed",
        width: "100vw",
        height: "100vh",
        top: "0",
        left: "0",
        zIndex: "1000",
        backgroundColor: "rgba(61, 59, 59, 0.484)",
      }}
    >
      <div
        style={{
          position: "fixed",
          top: "50%",
          left: "50%",
          transform: "translate(-50% ,-50%)",
          width: "600px",
          height: "650px",
          backgroundColor: "var(--background-color)",
        }}
      >
        <ComponentLoader
          Condition={!isLoading}
          Component={
            <div>
              <form onSubmit={OnSubmit} action="">
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    padding: "10px",
                  }}
                >
                  <Cancel onClick={CloseWindow}></Cancel>
                  {/* <input type="submit" value={"Save "} /> */}
                  <button
                    style={{
                      backgroundColor: "white",
                      color: "black",
                      padding: " 4px 20px",
                      borderRadius: "9999px",
                      marginRight: "20px",
                    }}
                    type="submit"
                  >
                    Save
                  </button>
                </div>
                <div style={{ position: "relative" }}>
                  <img
                    style={{
                      width: "100%",
                      aspectRatio: "3/1",
                      objectFit: "cover",
                    }}
                    src={
                      coverImage && coverImage.length > 0
                        ? URL.createObjectURL(Array.from(coverImage)[0])
                        : currentUser.coverImage
                    }
                    alt=""
                  />

                  <button
                    type="button"
                    onClick={() => coverImageRef.current?.click()}
                    style={{
                      position: "absolute",
                      zIndex: "10",
                      top: "50%",
                      backgroundColor: "transparent",
                      left: "50%",
                      transform: "translate(-50%,-50%)",
                    }}
                  >
                    <FontAwesomeIcon icon={faCamera} />
                  </button>
                  <input
                    accept=".png,.jpg"
                    style={{ display: "none" }}
                    type="file"
                    {...rest}
                    ref={(e) => {
                      coverImageReff(e);
                      coverImageRef.current = e;
                    }}
                  />
                </div>
                <div style={{ position: "relative", height: "80px" }}>
                  <div
                    style={{
                      position: "absolute",
                      width: "140px",
                      height: "140px",
                      borderRadius: "5555px",
                      overflow: "hidden",
                      top: "-70px",
                      left: "40px",
                      backgroundColor: "grey",
                    }}
                  >
                    <img
                      style={{ width: "100%", height: "100%" }}
                      alt=""
                      src={
                        iconImage && iconImage?.length > 0
                          ? URL.createObjectURL(Array.from(iconImage)[0])
                          : currentUser.icon
                      }
                    />
                    <button
                      onClick={() => iconRef.current?.click()}
                      type="button"
                      style={{
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        backgroundColor: "transparent",
                        transform: "translate(-50%,-50%)",
                      }}
                    >
                      <FontAwesomeIcon icon={faCamera} />
                    </button>
                    <input
                      accept=".png,.jpg"
                      style={{ display: "none" }}
                      type="file"
                      {...resst}
                      ref={(e) => {
                        iconReff(e);
                        iconRef.current = e;
                      }}
                    />
                  </div>
                </div>
                <div style={{ display: "flex", justifyContent: "center" }}>
                  <input
                    placeholder="Name"
                    style={{
                      width: "calc(100% - 50px)",
                      padding: "10px",
                      backgroundColor: "black",
                      outline: "none",
                      border: "1px solid white",
                    }}
                    autoComplete="off"
                    {...register("name")}
                    type="text"
                    defaultValue={currentUser?.name}
                  />
                </div>
              </form>
            </div>
          }
        />
      </div>
    </div>
  );
};

export default EditProfile;
