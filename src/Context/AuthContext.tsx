import {
  useState,
  createContext,
  SetStateAction,
  Dispatch,
  useEffect,
} from "react";

interface contextinterface {
  user: string;
  setUser: Dispatch<SetStateAction<string>>;
  userLoaded: boolean;
  userProfilePic: string;
  setUserProfilePic: Dispatch<SetStateAction<string>>;
}

export const authContext = createContext({} as contextinterface);

export const AuthContextProvider = ({ children }: any) => {
  const [userLoaded, setUserLoaded] = useState(false);
  const [user, setUser] = useState("");
  const [userProfilePic, setUserProfilePic] = useState("");
  useEffect(() => {
    const localstorageitem = localStorage.getItem("user");
    if (localstorageitem) {
      const user = JSON.parse(localstorageitem);
      setUser(user);
      console.log(user);
      setUserLoaded(true);
    }
  }, []);

  return (
    <authContext.Provider
      value={{ user, setUser, userLoaded, userProfilePic, setUserProfilePic }}
    >
      {children}
    </authContext.Provider>
  );
};
