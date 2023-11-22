import { useNavigate } from "react-router-dom";

const Back = () => {
  const navigate = useNavigate();
  const HandleClick = () => {
    navigate(-1);
  };
  return <button onClick={HandleClick}>GoBack</button>;
};

export default Back;
