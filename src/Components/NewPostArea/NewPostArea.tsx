import { useAuthContext } from "../../Hooks/useAuthContext";
import style from "./NewPostArea.module.css";
import { usePostNewTweet } from "../../Hooks/usePostNewTweet";
import { useRef } from "react";

const NewPostArea = () => {
  const { register, onSubmit, canSubmit } = usePostNewTweet();
  const { ref, ...rest } = register("Images");
  const filesRef = useRef<HTMLInputElement | null>(null);

  const { currentUser } = useAuthContext();
  return (
    <div
      style={{
        display: "flex",
        width: "100%",
        borderTop: "1px solid rgba(255,255,255,0.3)",
        borderBottom: "1px solid rgba(255,255,255,0.3)",
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
            borderBottom: "1px solid rgba(255,255,255,0.3)",
            marginBottom: "10px",
            display: "flex",
            alignItems: "center",
            minHeight: "100px",
          }}
        >
          <textarea
            className={style["text-input"]}
            {...register("contentText")}
            placeholder="What is happening ?!"
          ></textarea>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <input
            type="file"
            multiple
            {...rest}
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
            UploadImages
          </button>
          <button
            className={style["submit-button"]}
            disabled={!canSubmit}
            type="submit"
          >
            Post
          </button>
        </div>
      </form>
    </div>
  );
};

export default NewPostArea;
