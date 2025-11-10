import React from "react";
import { Route, Routes } from "react-router-dom";
import Start from "./pages/Start";
import UserLogin from "./pages/UserLogin";
import UserSign from "./pages/UserSign";
import Captainlogin from "./pages/Captainlogin";
import CaptainSign from "./pages/CaptainSign";
import Home from "./pages/Home";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Start />} />
        <Route path="/user-login" element={<UserLogin />} />
        <Route path="/user-signup" element={<UserSign />} />
        <Route path="/captain-login" element={<Captainlogin />} />
        <Route path="/captain-signup" element={<CaptainSign />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </div>
  );
};

export default App;
