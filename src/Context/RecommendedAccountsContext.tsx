import { createContext, useEffect, useState } from "react";
import { RecommendedAccountType } from "../Types/RecommendedAccountsType";
import { useAuthContext } from "../Hooks/useAuthContext";
import { useApi } from "../Hooks/useApi";
interface RecAccountsType {
  RecAccounts: RecommendedAccountType[];
}

export const RecAccountsContext = createContext<RecAccountsType>({
  RecAccounts: [],
});
export const RecAccountsContextProvider = ({ children }: any) => {
  const { GetRecAccounts } = useApi();
  const [RecAccounts, setRecommendedAccounts] = useState<
    RecommendedAccountType[]
  >([]);

  const { user } = useAuthContext();

  useEffect(() => {
    if (user) Fetch();
  }, [user]);

  const Fetch = async () => {
    const result = await GetRecAccounts();

    if (result.ok) {
      const json = await result.json();
      setRecommendedAccounts(json.recAccounts);
    }
  };

  return (
    <RecAccountsContext.Provider value={{ RecAccounts }}>
      {children}
    </RecAccountsContext.Provider>
  );
};
