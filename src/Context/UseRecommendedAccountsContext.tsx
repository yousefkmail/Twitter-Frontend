import { useContext } from "react";
import { RecAccountsContext } from "./RecommendedAccountsContext";

export const UseRecommendedAccountsContext = () => {
  const { RecAccounts } = useContext(RecAccountsContext);
  return { RecAccounts };
};
