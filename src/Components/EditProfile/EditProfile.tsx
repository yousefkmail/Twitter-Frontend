import { useAuthContext } from "../../Hooks/index";
import { useEditProfile } from "../../Hooks/index";
import { ComponentLoader } from "../../Components/index";

interface EditProfileProps {
  CloseWindow: () => void;
}

const EditProfile = ({ CloseWindow }: EditProfileProps) => {
  const { currentUser } = useAuthContext();

  const { register, OnSubmit, isLoading } = useEditProfile();
  return (
    <div
      style={{
        position: "fixed",
        width: "100vw",
        height: "100vh",
        top: "0",
        left: "0",
        zIndex: "1000",
      }}
    >
      <div
        style={{
          position: "fixed",
          top: "50%",
          left: "50%",
          transform: "translate(-50% ,-50%)",
          width: "500px",
          height: "500px",
          display: "grid",
          backgroundColor: "var(--background-color)",

          placeItems: "center",
        }}
      >
        <ComponentLoader
          Condition={!isLoading}
          Component={
            <>
              <button onClick={CloseWindow}>Close me </button>
              <form onSubmit={OnSubmit} action="">
                <img
                  style={{ width: "90%", aspectRatio: "1/1" }}
                  src={currentUser?.icon}
                  alt=""
                />
                <input {...register("icon")} type="file" />
                <input {...register("coverImage")} type="file" />
                <input
                  {...register("name")}
                  type="text"
                  defaultValue={currentUser?.name}
                />
                <input type="submit" />
              </form>
            </>
          }
        />
      </div>
    </div>
  );
};

export default EditProfile;
