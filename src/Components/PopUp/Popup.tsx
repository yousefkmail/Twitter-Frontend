interface PopupProps {
  message: string;
  onConfirm: () => void;
}
const PopUp = ({ message, onConfirm }: PopupProps) => {
  return (
    <div
      onClick={(e) => e.stopPropagation()}
      style={{
        position: "fixed",
        inset: "0",
        zIndex: 100,
        display: "grid",
        placeItems: "center",
      }}
    >
      <div
        style={{
          borderRadius: "7px",
          overflow: "hidden",
          paddingBottom: "10px",

          display: "flex",
          backgroundColor: "black",
          flexDirection: "column",
          alignItems: "center",
          border: "1px solid rgba(255,255,255,0.2)",
        }}
      >
        <div
          style={{
            width: "300px",
            minHeight: "100px",
            padding: "20px",
          }}
        >
          {message}
        </div>
        <button
          style={{ backgroundColor: "rgb(29, 155, 240)" }}
          onClick={() => {
            onConfirm();
          }}
        >
          Ok
        </button>
      </div>
    </div>
  );
};

export default PopUp;
