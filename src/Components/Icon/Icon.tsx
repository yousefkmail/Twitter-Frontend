interface iconprops {
  iconsrc: string;
}
const Icon = ({ iconsrc }: iconprops) => {
  return (
    <div style={{ width: "100%", aspectRatio: "1/1" }}>
      <img
        style={{ width: "100%", height: "100%", borderRadius: "999px" }}
        src={iconsrc}
        alt=""
      />
    </div>
  );
};

export default Icon;
