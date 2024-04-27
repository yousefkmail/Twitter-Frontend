import { createContext, useEffect, useState } from "react";
import { useAuthContext } from "../Hooks/index";
import { useApi } from "../Hooks/index";
import { ExtendedUserPreviewProps } from "../Components/UserPreview/ExtendedUserPreview";
interface RecAccountsType {
  RecAccounts: ExtendedUserPreviewProps[] | undefined;
}

export const RecAccountsContext = createContext<RecAccountsType>({
  RecAccounts: [],
});
export const RecAccountsContextProvider = ({ children }: any) => {
  const { GetRecAccounts } = useApi();
  const [RecAccounts, setRecommendedAccounts] = useState<
    ExtendedUserPreviewProps[] | undefined
  >();

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
