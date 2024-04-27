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
        border: "var(--main-border)",
        borderRadius: "10px",
      }}
    >
      <div
        style={{
          borderRadius: "10px",
        }}
      >
        <ComponentLoader
          Condition={Trends.length > 0}
          Component={
            <div>
              <h3
                style={{
                  paddingLeft: "15px",
                  color: "rgb(233,233,233)",
                  fontSize: "20px",
                  fontWeight: "700",
                }}
              >
                {t("TrendsLabel")}
              </h3>
              {Trends.map((item: TrendProps, index) => (
                <Trend key={index} {...item} />
              ))}
            </div>
          }
        />
      </div>
    </div>
  );
};

export default Trends;
