
import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { BsYoutube } from "react-icons/bs";
import { AiOutlineSearch } from "react-icons/ai";
import { MdVideoCall, MdNotificationsNone } from "react-icons/md";
import profilePic from '../sources/profilePic.png';

const Navbar = ({ onSearch }) => {
  const [term, setTerm] = useState('');

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    onSearch(term);  
  };

  return (
    <div className="flex w-screen justify-between items-center px-14 h-14 bg-[#4d3434] opacity-95 sticky top-0 z-50">
      <div className="flex gap-8 items-center text-2xl">
        <GiHamburgerMenu />
        <div className="flex gap-2 items-center justify-center">
          <BsYoutube className="text-2xl text-red-500" />
          <span>YouTube</span>
        </div>
      </div>
      <form onSubmit={handleSearchSubmit}>
        <div className="flex bg-zinc-900 items-center h-10 px-4 pr-0 rounded-3xl">
          <input
            type="text"
            placeholder="Search"
            className="bg-zinc-900"
            value={term}
            onChange={(e) => setTerm(e.target.value)}
          />
          <button className="h-10 w-16 bg-zinc-800 rounded-r-3xl">
            <AiOutlineSearch className="text-xl" />
          </button>
        </div>
      </form>
      <div className="flex gap-2 items-center text-2xl">
        <MdVideoCall />
        <MdNotificationsNone />
        <img
          src={profilePic}
          alt="Profile"
          className="w-10 h-10 rounded-full border-gray-600 cursor-pointer"
        />
      </div>
    </div>
  );
};

export default Navbar;
