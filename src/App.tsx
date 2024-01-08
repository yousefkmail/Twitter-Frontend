import { Routes, Route, Navigate, Outlet } from "react-router-dom";
import {
  SideBar,
  Tweets,
  Trends,
  DefaultPageDesign,
  WhoToFollow,
  SearchBar,
} from "./Components/index";
import { useAuthContext } from "./Hooks/index";
import HomeNoUser from "./Pages/HomeNoUser";
// import Home from "./Pages/Twitter/Home/Home";
import AuthRoutes from "./Routes/AuthRoutes";
import Search from "./Pages/Twitter/Search/Search";
// import Profile from "./Pages/Twitter/Profile/Profile";
import TweetPage from "./Pages/Twitter/Tweet/TweetPage";
import { useContext, lazy, Suspense } from "react";
import { UserTweetsContext } from "./Context/UserTweetsContext";
import { UseRecommendedAccountsContext } from "./Hooks/index";
const Home = lazy(() => import("./Pages/Twitter/Home/Home"));
const Profile = lazy(() => import("./Pages/Twitter/Profile/Profile"));
function App() {
  const { user } = useAuthContext();
  const { RecAccounts } = UseRecommendedAccountsContext();
  return (
    <div className="app">
      <Suspense>
        <Routes>
          <Route
            path="/"
            element={user ? <Navigate to={"/home"} /> : <HomeNoUser />}
          />
          <Route element={<AuthRoutes />}>
            <Route
              element={
                <>
                  <SideBar />
                  <div style={{ width: "1000px", height: "max(100vh,auto)" }}>
                    <Outlet />
                  </div>
                </>
              }
            >
              <Route path="/about" element={<div>about me </div>} />
              <Route path="/home" element={<Home />} />
              <Route
                path="/explore"
                element={
                  <DefaultPageDesign
                    LeftPartition={
                      <>
                        <SearchBar />
                        <Trends />
                      </>
                    }
                    RightPartition={
                      <>
                        <WhoToFollow RecAccounts={RecAccounts} />
                      </>
                    }
                  />
                }
              />
              <Route path="/profile" element={<Profile />}>
                <Route
                  index
                  element={
                    <Tweets Tweets={useContext(UserTweetsContext).tweets} />
                  }
                ></Route>
                <Route
                  path="likes"
                  element={
                    <Tweets Tweets={useContext(UserTweetsContext).tweets} />
                  }
                ></Route>
                <Route
                  path="replies"
                  element={
                    <Tweets Tweets={useContext(UserTweetsContext).tweets} />
                  }
                ></Route>
                <Route
                  path="media"
                  element={
                    <Tweets Tweets={useContext(UserTweetsContext).tweets} />
                  }
                ></Route>
              </Route>
              <Route path="/profile">
                <Route path="following" element={"following"}></Route>
                <Route path="followers" element={"followers"}></Route>
              </Route>
              <Route path="*" element={<div>abome </div>} />
              <Route path="/search" element={<Search />} />
              <Route path=":userId/:tweetId" element={<TweetPage />} />
            </Route>
          </Route>
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
