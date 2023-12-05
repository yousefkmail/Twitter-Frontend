import { createContext, useEffect, useState } from "react";
import { useApi } from "../Hooks/index";

interface TrendsContextProps {
  Trends: TrendProps[];
}

export interface TrendProps {
  title: string;
  tweetCount: number;
}

export const TrendsContext = createContext<TrendsContextProps>(
  {} as TrendsContextProps
);

export const TrendsContextProvider = ({ children }: any) => {
  const [Trends, setTrends] = useState<TrendProps[]>([]);
  const { GetTrends } = useApi();

  useEffect(() => {
    FetchTrends();
  }, []);

  const FetchTrends = async () => {
    const result = await GetTrends();
    const json = await result.json();
    setTrends(json.Trends);
  };

  return (
    <TrendsContext.Provider value={{ Trends }}>
      {children}
    </TrendsContext.Provider>
  );
};
