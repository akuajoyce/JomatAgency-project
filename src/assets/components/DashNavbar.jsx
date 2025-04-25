import { BellIcon, SearchIcon } from "lucide-react";
import React from "react";
import Profile1 from "../../assets/images/Profile1.jpeg";

const DashNavbar = () => {
  return (
    <div className="w-full">
      <nav className="w-full flex flex-col sm:flex-row items-center justify-between border-b border-gray-300 h-auto sm:h-20 px-2 sm:px-10 py-2 bg-white gap-4">
        {/* Search Box */}
        <div className="flex items-center bg-[#B6CBBD] px-4 py-2 rounded-full w-full sm:w-auto">
          <input
            type="text"
            placeholder="Search for what you need ..."
            className="bg-transparent placeholder-white text-white w-full sm:w-64 focus:outline-none"
          />
          <SearchIcon className="text-[#6D2323] ml-2" />
        </div>

        {/* Notification & Profile */}
        <div className="flex items-center gap-4 w-full sm:w-auto justify-between sm:justify-end">
          <BellIcon className="text-[#6D2323] border-2 border-gray-300 rounded-full p-1 w-8 h-8" />

          <div className="flex items-center gap-2 bg-[#6D2323] px-3 py-1 rounded-full">
            <img
              src={Profile1}
              alt="Profile"
              className="w-10 h-10 rounded-full border-2 border-[#B6CBBD]"
            />
            <p className="text-[#B6CBBD] text-sm sm:text-base">Matt Dink</p>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default DashNavbar;
