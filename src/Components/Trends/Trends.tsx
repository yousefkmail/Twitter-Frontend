import { useEffect, useState } from "react";
import Trend, { TrendProps } from "./Trend";
import ComponentLoader from "../ComponentLoader/ComponentLoad";
import { useApi } from "../../Hooks/useApi";
const Trends = () => {
  const [Trends, setTrends] = useState([]);
  const { GetTrends } = useApi();
  useEffect(() => {
    FetchTrends();
  }, []);

  const FetchTrends = async () => {
    const result = await GetTrends();
    const json = await result.json();
    setTrends(json.Trends);
  };

  return (
    <div
      style={{
        marginTop: "40px",
        backgroundColor: "var(--secondary-background-color)",
      }}
    >
      <ComponentLoader
        Condition={Trends.length > 0}
        Component={
          <div>
            <h3>Trends for you</h3>
            {Trends.map((item: TrendProps, index) => (
              <Trend key={index} {...item} />
            ))}
          </div>
        }
      />
    </div>
  );
};

export default Trends;
