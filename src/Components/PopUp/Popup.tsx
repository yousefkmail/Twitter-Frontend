interface PopupProps {
  message: string;
  onConfirm: () => void;
}
const PopUp = ({ message, onConfirm }: PopupProps) => {
  return (
    <div
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
          background: "grey",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <div
          style={{
            width: "300px",
            minHeight: "300px",
            padding: "20px",
          }}
        >
          {message}
        </div>
        <button onClick={onConfirm}>Ok</button>
      </div>
    </div>
  );
};

export default PopUp;
