interface ImagePreviewProps {
  file: File | undefined;
  onDelete: () => void;
}

const ImagePreview = ({ file, onDelete }: ImagePreviewProps) => {
  return (
    <div style={{ position: "relative" }}>
      <button
        type="button"
        onClick={onDelete}
        style={{ position: "absolute", top: "0", left: "10px" }}
      >
        X
      </button>
      <img
        style={{
          width: "100%",
          height: "400px",
          objectFit: "cover",
        }}
        src={file && URL.createObjectURL(file)}
      />
    </div>
  );
};

export default ImagePreview;
