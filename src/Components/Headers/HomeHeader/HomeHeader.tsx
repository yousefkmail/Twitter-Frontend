const HomeHeader = () => {
  return (
    <div
      style={{
        paddingRight: "15px",
        paddingLeft: "15px",
        marginBottom: "10px",
        marginTop: "10px",
        display: "flex",
      }}
    >
      <button style={{ flexGrow: "1" }}>Following</button>
      <button style={{ flexGrow: "1" }}>For you</button>
    </div>
  );
};

export default HomeHeader;
