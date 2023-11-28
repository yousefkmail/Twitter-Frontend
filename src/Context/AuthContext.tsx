import {
  useState,
  createContext,
  SetStateAction,
  Dispatch,
  useEffect,
} from "react";
import { useApi } from "../Hooks/useApi";
import { user } from "../Types/user";
interface contextinterface {
  user: string;
  setUser: Dispatch<SetStateAction<string>>;
  userLoaded: boolean;
  currentUser: user;
  setCurrentUser: Dispatch<SetStateAction<user>>;
}

export const authContext = createContext({} as contextinterface);

export const AuthContextProvider = ({ children }: any) => {
  const [userLoaded, setUserLoaded] = useState(false);
  const [user, setUser] = useState("");
  const { GetUser } = useApi();
  const [currentUser, setCurrentUser] = useState<user>({} as user);
  useEffect(() => {
    const localstorageitem = localStorage.getItem("user");
    if (localstorageitem) {
      const user = JSON.parse(localstorageitem);
      setUser(user);
      FetchUser(user);
    }
    setUserLoaded(true);
  }, []);

  const FetchUser = async (user: string) => {
    const result = await GetUser(user);
    const data = await result.json();
    setCurrentUser(data.user);
  };

  return (
    <authContext.Provider
      value={{
        user,
        setUser,
        userLoaded,
        currentUser,
        setCurrentUser,
      }}
    >
      {children}
    </authContext.Provider>
  );
};
