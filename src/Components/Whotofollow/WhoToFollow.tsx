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
          <span> {t("recAccountsLabel")}</span>
          {RecAccounts.map((item, index) => (
            <RecAccount key={index} {...item} />
          ))}
        </div>
      }
    />
  );
};

export default WhoToFollow;
