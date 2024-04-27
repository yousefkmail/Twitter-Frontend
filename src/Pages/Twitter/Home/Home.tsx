import {
  HomeHeader,
  NewPostArea,
  Trends,
  SearchBar,
  UserPreviewCollection,
  DefaultPageDesign,
  Tweets,
} from "../../../Components/index";
import { UseRecommendedAccountsContext } from "../../../Hooks/index";
import { useContext } from "react";
import { TweetsContext } from "../../../Context/TweetsContext";
// import { io, Socket } from "socket.io-client";
const Home = () => {
  const { RecAccounts } = UseRecommendedAccountsContext();
  // const [socket, setSocket] = useState<Socket>();
  const { tweets } = useContext(TweetsContext);
  // useEffect(() => {
  //   if (user.length > 0) {
  //     const socket = io("http://localhost:3000", {
  //       auth: {
  //         token: user,
  //       },
  //     });

  //     socket.on("connect", () => {
  //       setSocket(socket);
  //     });
  //   }
  //  return () => {
  //    socket?.close();
  //  };
  // }, [user]);

  return (
    <DefaultPageDesign
      LeftPartition={
        <>
          <HomeHeader />
          <NewPostArea />
          <Tweets Tweets={tweets} />
        </>
      }
      RightPartition={
        <>
          <SearchBar />
          <Trends />
          <UserPreviewCollection Users={RecAccounts} />
        </>
      }
    />
  );
};

export default Home;
