import { HTMLAttributes } from "react";

export interface UserPreviewProps extends HTMLAttributes<HTMLDivElement> {
  _id: string;
  name: string;
  icon: string;
  isFollowing: boolean;
  bio?: string;
}
