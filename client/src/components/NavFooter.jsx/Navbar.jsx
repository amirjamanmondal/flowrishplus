import React from "react";

const Navbar = () => {
  return (
    <div className="w-full h-16 bg-white flex justify-between items-center px-4 border-b-2 border-purple-400">
      <h1 className="w-1/3 text-2xl font-bold text-purple-400 ">Flourish</h1>
      <div className="w-full flex gap-4 items-center justify-between">
        <span>Home</span>
        <span>Explore</span>
        <span>Profile</span>
        <span>Consultant</span>
        <span>Support</span>
      </div>
    </div>
  );
};

export default Navbar;
