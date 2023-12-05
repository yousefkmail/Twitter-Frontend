import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
const Back = () => {
  const navigate = useNavigate();
  const HandleClick = () => {
    navigate(-1);
  };
  return (
    <button onClick={HandleClick}>
      <FontAwesomeIcon icon={faArrowLeft} />
    </button>
  );
};

export default Back;
