import React from "react";

const Header = () => {
  return (
    <div className="fixed top-0 w-full bg-black text-white z-50 shadow-md">
      <div className="flex items-center justify-between px-8 py-4">
        {/* Logo */}
        <div className="flex items-center mx-5">
          <img
            className="ml-[10px] w-[200px] h-auto"
            src="/Screenshot_2025-01-07_000533-removebg-preview.png"
            alt="Logo"
          />
          
        </div>

        {/* Search Bar */}
        <div className="flex-1 mx-10">
          <input
            type="text"
            className=" w-full py-2 px-10 rounded-full bg-gray-900 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-pink-500"
            placeholder="Search..."
          />
        </div>

        {/* Buttons */}
        <div className="flex items-center space-x-9">
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
