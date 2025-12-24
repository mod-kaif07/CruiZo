import React from "react";
import { Route, Routes } from "react-router-dom";
import Start from "./pages/Start";
import UserLogin from "./pages/UserLogin";
import UserSign from "./pages/UserSign";
import Captainlogin from "./pages/Captainlogin";
import CaptainSign from "./pages/CaptainSign";
import Home from "./pages/Home";
import UserProtectedWrapper from "./pages/UserProtectedWrapper";
import Userlogout from "./pages/Userlogout";
import CaptainHome from "./pages/CaptainHome";
import Captainlogout from "./pages/Captainlogout";
import CaptainProtectWrapper from "./pages/CaptainProtectWrapper";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Start />} />
        <Route path="/user-login" element={<UserLogin />} />
        <Route path="/user-signup" element={<UserSign />} />
        <Route path="/captain-login" element={<Captainlogin />} />
        <Route path="/captain-signup" element={<CaptainSign />} />
        <Route
          path="/user-home"
          element={
            <UserProtectedWrapper>
              <Home />
            </UserProtectedWrapper>
          }
        />

        <Route
          path="/user-logout"
          element={
            <UserProtectedWrapper>
              <Userlogout />
            </UserProtectedWrapper>
          }
        />
        <Route
          path="/captain-home"
          element={
            <CaptainProtectWrapper>
              <CaptainHome />
            </CaptainProtectWrapper>
          }
        />

        <Route
          path="/captains/logoutCaptain"
          element={
            <CaptainProtectWrapper>
              <Captainlogout />
            </CaptainProtectWrapper>
          }
        />
      </Routes>
    </div>
  );
};

export default App;
