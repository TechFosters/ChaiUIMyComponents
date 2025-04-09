import React from "react";
import logo from "../../assets/images/logo.png";
import Searchbar from "../Searchbar/Searchbar";
import Toggle from "../Toggle/Toggle";

const Navbar = () => {
  return (
    <div className="absolute w-[100%] top-0 backdrop-blur-md   pl-10 pr-10 dark:text-white dark:backdrop-blur-xs">
      <div className="flex justify-between p-4">
        <ul className="flex gap-10 items-center">
          <li className=" p-0">
            <img
              className="w-[150px] h-[50px] p-0 object-contain cursor-pointer"
              src={logo}
              alt="logo-image"
            />
          </li>
          <li className="text-xl font-semibold tracking-widest cursor-pointer">
            <h1>Documentation</h1>
          </li>
        </ul>
        <ul className="flex gap-2 items-center">
          <Toggle />
          <Searchbar />
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
