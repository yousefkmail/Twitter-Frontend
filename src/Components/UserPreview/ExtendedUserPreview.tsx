import { FunctionComponent } from "react";
import UserPreview from "./UserPreview";
import { UserPreviewProps } from "../../Types/UserPreviewProps";

export interface ExtendedUserPreviewProps extends UserPreviewProps {
  bio: string;
}

const ExtendedUserPreview: FunctionComponent<ExtendedUserPreviewProps> = ({
  bio,
  ...rest
}) => {
  return <UserPreview {...rest}> {bio}</UserPreview>;
};

export default ExtendedUserPreview;
