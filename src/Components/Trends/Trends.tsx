import { useContext } from "react";
import { TrendProps } from "./Trend";
import { ComponentLoader, Trend } from "../../Components/index";
import { useTranslation } from "react-i18next";
import { TrendsContext } from "../../Context/TrendsContext";

const Trends = () => {
  const { t } = useTranslation();

  const { Trends } = useContext(TrendsContext);

  return (
    <div
      style={{
        marginTop: "40px",
        paddingTop: "7px",
        paddingLeft: "7px",
        borderRadius: "10px",
        backgroundColor: "var(--secondary-background-color)",
      }}
    >
      <ComponentLoader
        Condition={Trends.length > 0}
        Component={
          <div>
            <h3>{t("TrendsLabel")}</h3>
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
