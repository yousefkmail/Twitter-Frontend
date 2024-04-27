import style from "./WhoToFollow.module.css";
import UserPreview from "../UserPreview/UserPreview";
import ComponentLoader from "../ComponentLoader/ComponentLoad";
import { useTranslation } from "react-i18next";
import { ExtendedUserPreviewProps } from "../UserPreview/ExtendedUserPreview";
interface ExtendedUserPreviewCollectionProps {
  Users: ExtendedUserPreviewProps[] | undefined;
}

const ExtendedUserPreviewCollection = ({
  Users,
}: ExtendedUserPreviewCollectionProps) => {
  const { t } = useTranslation();
  return (
    <ComponentLoader
      Condition={Users !== undefined}
      Component={
        <div className={style["container"]}>
          <h3 style={{ paddingLeft: "15px", fontWeight: "700" }}>
            {t("recAccountsLabel")}
          </h3>
          {Users?.map((item, index) => (
            <UserPreview key={index} {...item} />
          ))}
        </div>
      }
    />
  );
};

export default ExtendedUserPreviewCollection;
