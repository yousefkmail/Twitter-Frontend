import style from "./WhoToFollow.module.css";
import { RecommendedAccountType } from "../../Types/RecommendedAccountsType";
import RecAccount from "./RecAccount";
import ComponentLoader from "../ComponentLoader/ComponentLoad";
import { useTranslation } from "react-i18next";
interface WhoToFollowProps {
  RecAccounts: RecommendedAccountType[];
}

const WhoToFollow = ({ RecAccounts }: WhoToFollowProps) => {
  const { t } = useTranslation();
  return (
    <ComponentLoader
      Condition={RecAccounts.length > 0}
      Component={
        <div className={style["container"]}>
          <h3 style={{ paddingLeft: "15px", fontWeight: "700" }}>
            {t("recAccountsLabel")}
          </h3>
          {RecAccounts.map((item, index) => (
            <RecAccount key={index} {...item} />
          ))}
        </div>
      }
    />
  );
};

export default WhoToFollow;
