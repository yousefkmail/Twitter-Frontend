import style from "./WhoToFollow.module.css";
import { RecommendedAccountType } from "../../Types/RecommendedAccountsType";
import RecAccount from "./RecAccount";
import ComponentLoader from "../ComponentLoader/ComponentLoad";
interface WhoToFollowProps {
  RecAccounts: RecommendedAccountType[];
}

const WhoToFollow = ({ RecAccounts }: WhoToFollowProps) => {
  return (
    <ComponentLoader
      Condition={RecAccounts.length > 0}
      Component={
        <div className={style["container"]}>
          <span> Who to follow</span>
          {RecAccounts.map((item, index) => (
            <RecAccount key={index} {...item} />
          ))}
        </div>
      }
    />
  );
};

export default WhoToFollow;
