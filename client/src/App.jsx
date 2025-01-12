import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Signup from "./components/auth/Signup";
import Notfound from "./components/err/Notfound";
import Login from "./components/auth/Login";
import Home from "./components/pages/Home";
import MobileVerify from "./components/auth/MobileVerify";

function App() {
  return (
    <div className="min-h-screen text-purple-600 ">
      <div className="h-10"></div>
      <Routes>
        <Route path="*" element={<Notfound />} />
        <Route path="/profile" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/phone" element={<MobileVerify />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
