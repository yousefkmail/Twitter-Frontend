import style from "./Trends.module.css";
import { useNavigate } from "react-router-dom";
export interface TrendProps {
  title: string;
  tweetCount: number;
}

const Trend = ({ title, tweetCount }: TrendProps) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate({
      pathname: "/search",
      search: `s=${title.slice(1)}`,
    });
  };

  return (
    <div onClick={handleClick} className={style["trend-container"]}>
      <div>{title}</div>
      <div>{tweetCount}</div>
    </div>
  );
};

export default Trend;
