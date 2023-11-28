interface TweetSettingsProps {
  CloseWindow: () => void;
  DeleteTweet: () => void;
}

const TweetSettings = ({ CloseWindow, DeleteTweet }: TweetSettingsProps) => {
  return (
    <>
      <div
        onClick={CloseWindow}
        style={{ position: "fixed", inset: "0" }}
      ></div>
      <div
        onClick={DeleteTweet}
        style={{
          position: "absolute",
          backgroundColor: "black",
          top: "0",
          right: "0",
          width: "200px",
          height: "300px",
          border: "1px solid white",
          zIndex: "10",
        }}
      >
        Delete tweet
      </div>
    </>
  );
};

export default TweetSettings;
