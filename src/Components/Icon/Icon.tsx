// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faUser } from "@fortawesome/free-regular-svg-icons";
interface iconprops {
  iconsrc: string;
}
const Icon = ({ iconsrc }: iconprops) => {
  return (
    <div style={{ width: "100%", height: "100%" }}>
      <img
        style={{
          width: "100%",
          height: "100%",
          borderRadius: "999px",
          objectFit: "cover",
          color: "red",
        }}
        src={iconsrc}
      />
    </div>
  );
};

export default Icon;
