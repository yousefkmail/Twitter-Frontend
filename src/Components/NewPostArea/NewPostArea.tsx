import { useAuthContext } from "../../Hooks/useAuthContext";
import style from "./NewPostArea.module.css";
import { usePostNewTweet } from "../../Hooks/usePostNewTweet";
import { useEffect, useRef, useState } from "react";
import ImagePreview from "./ImagePreview";
import { faImage } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useTranslation } from "react-i18next";
interface newPostAreaProps {
  superTweet?: string;
}
const NewPostArea = ({ superTweet }: newPostAreaProps) => {
  const {
    register,
    onSubmit,
    canSubmit,
    getValues,
    setValue,
    watch,
    isLoading,
    deleteImage,
  } = usePostNewTweet(superTweet);

  const { ref, onChange, ...rest } = register("Images");
  const filesRef = useRef<HTMLInputElement | null>(null);
  const [files, setFiles] = useState<(File | undefined)[]>();
  const { t } = useTranslation();
  useEffect(() => {
    const subscription = watch((value, { name }) => {
      if (name === "Images") {
        setFiles(value.Images);
      }
    });
    return () => subscription.unsubscribe();
  }, [watch]);

  const { currentUser } = useAuthContext();
  return (
    <div
      onClick={(e) => {
        e.stopPropagation();
      }}
      style={{
        display: "flex",
        width: "100%",
        borderTop: "1px solid rgba(255,255,255,0.3)",
        borderBottom: "1px solid rgba(255,255,255,0.3)",
        backgroundColor: "var(--background-color)",
      }}
    >
      <div style={{ width: "60px" }}>
        <img
          style={{ width: "70%", objectFit: "cover" }}
          src={currentUser.icon}
          alt=""
        />
      </div>
      <form
        style={{ display: "flex", flexDirection: "column", flexGrow: "1" }}
        onSubmit={onSubmit}
      >
        <div
          style={{
            marginBottom: "10px",
            display: "flex",
            alignItems: "center",
            minHeight: "100px",
          }}
        >
          <textarea
            className={style["text-input"]}
            {...register("contentText")}
            placeholder={t("newPostPlaceholder")}
          ></textarea>
        </div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "10px",
          }}
        >
          {files &&
            Array.from(files).map((file, index) => (
              <ImagePreview
                key={index}
                onDelete={() => deleteImage(index)}
                file={file}
              />
            ))}
        </div>
        {!isLoading && (
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              transition: "all ease-in-out 0.3s",
            }}
          >
            <input
              type="file"
              multiple
              {...rest}
              onChange={(e) => {
                var files = Array.from(e.target.files ?? []);
                var oldImages = Array.from(getValues("Images"));
                setValue("Images", [...files, ...oldImages]);
              }}
              ref={(e) => {
                ref(e);
                filesRef.current = e;
              }}
              style={{ display: "none" }}
            />
            <button
              type="button"
              onClick={() => {
                filesRef.current?.click();
              }}
            >
              <FontAwesomeIcon
                style={{ color: "var(--website-secondary-color)" }}
                icon={faImage}
              />
            </button>
            <button
              className={style["submit-button"]}
              disabled={!canSubmit}
              type="submit"
            >
              Post
            </button>
          </div>
        )}
      </form>
    </div>
  );
};

export default NewPostArea;
