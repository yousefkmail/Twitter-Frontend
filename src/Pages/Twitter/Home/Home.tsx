import HomeHeader from "../../../Components/Headers/HomeHeader/HomeHeader";
import NewPostArea from "../../../Components/NewPostArea/NewPostArea";
import Tweet from "../../../Components/Tweet/Tweet";
import { TweetModel } from "../../../Types/TweetModel";
import Trends from "../../../Components/Trends/Trends";
import { useTranslation } from "react-i18next";
import Searchbar from "../../../Components/Searchbar/Searchbar";
import WhoToFollow from "../../../Components/Whotofollow/WhoToFollow";
import { UseRecommendedAccountsContext } from "../../../Context/UseRecommendedAccountsContext";
import { useContext } from "react";
import { TweetsContext } from "../../../Context/TweetsContext";
// import { io, Socket } from "socket.io-client";
const Home = () => {
  const { RecAccounts } = UseRecommendedAccountsContext();
  // const [socket, setSocket] = useState<Socket>();
  const { tweets } = useContext(TweetsContext);
  const { t } = useTranslation();
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

  console.log(t("greeting"));

  return (
    <div style={{ width: "100%", display: "flex" }}>
      <div
        style={{
          flexGrow: 1,
          maxWidth: "600px",
          borderLeft: "1px solid rgba(255,255,255,0.3)",
          borderRight: "1px solid rgba(255,255,255,0.3)",
        }}
      >
        <HomeHeader />
        <NewPostArea />
        {tweets?.map((item: TweetModel) => (
          <Tweet {...item} key={item._id} />
        ))}
      </div>
      <div style={{ width: "40%", marginLeft: "60px" }}>
        <Searchbar />
        <Trends />
        <WhoToFollow RecAccounts={RecAccounts} />
      </div>
    </div>
  );
};

export default Home;
