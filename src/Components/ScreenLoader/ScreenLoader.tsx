import { TailSpin } from "react-loader-spinner";

const ScreenLoader = () => {
  return (
    <div
      style={{
        position: "fixed",
        inset: "0",
        display: "grid",
        placeItems: "center",
        background: "rgba(128,128,128,0.3)",
        zIndex: "10",
      }}
    >
      <TailSpin
        height={100}
        width={100}
        color="#4fa94d"
        ariaLabel="ball-triangle-loading"
        visible={true}
      />
    </div>
  );
};

export default ScreenLoader;
