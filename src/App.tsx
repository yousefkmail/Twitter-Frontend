import { Routes, Route, Navigate, Outlet } from "react-router-dom";
import Sidebar from "./Components/Navbars/Sidebar";
import { useAuthContext } from "./Hooks/useAuthContext";
import HomeNoUser from "./Pages/HomeNoUser";
import Home from "./Pages/Twitter/Home/Home";
import AuthRoutes from "./Routes/AuthRoutes";
import Search from "./Pages/Twitter/Search/Search";
import Profile from "./Pages/Twitter/Profile/Profile";

function App() {
  const { user } = useAuthContext();

  return (
    <div className="app">
      <Routes>
        <Route
          path="/"
          element={user ? <Navigate to={"/home"} /> : <HomeNoUser />}
        />
        <Route element={<AuthRoutes />}>
          <Route
            element={
              <>
                <Sidebar />
                <div style={{ width: "1000px", height: "100vh" }}>
                  <Outlet />
                </div>
              </>
            }
          >
            <Route path="/about" element={<div>about me </div>} />
            <Route path="/home" element={<Home />} />
            <Route path="/profile" element={<Profile />}>
              <Route path="likes" element={"likes"}></Route>
              <Route path="replies" element={"replies"}></Route>
              <Route path="posts" element={"posts"}></Route>
              <Route path="media" element={"media"}></Route>
            </Route>
            <Route path="/profile">
              <Route path="following" element={"following"}></Route>
              <Route path="followers" element={"followers"}></Route>
            </Route>
            <Route path="*" element={<div>abome </div>} />
            <Route path="/search" element={<Search />} />
          </Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
