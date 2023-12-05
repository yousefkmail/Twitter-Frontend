import { useContext } from "react";
import { RecAccountsContext } from "../Context/RecommendedAccountsContext";

export const UseRecommendedAccountsContext = () => {
  const { RecAccounts } = useContext(RecAccountsContext);
  return { RecAccounts };
};
