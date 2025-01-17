import React from "react";
import Search from "../search";
const Header = () => {
  return (
    <div className="fixed top-0 w-[100%] bg-black text-white z-50 shadow-md flex justify-center items-center ">
      <div className="flex items-center  py-4 gap-[100px]">
        {/* Logo */}
        <div className=" ">
          <img
            className="ml-[10px] w-[200px] h-auto"
            src="/Screenshot_2025-01-07_000533-removebg-preview.png"
            alt="Logo"
          />
          
        </div>
        <Search/>
        <div className="flex items-center gap-[20px]">
          <button className="text-white hover:text-pink-500">Sign Up</button>
          <button className="text-white hover:text-pink-500">Log In</button>
          <button className="flex items-center px-4 py-2 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 text-white rounded-full shadow-lg hover:opacity-80">
            + Create Event
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
