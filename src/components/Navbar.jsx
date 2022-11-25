import React from "react";
import { FaUserCircle } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className="mx-auto px-10">
      <div className="w-full flex justify-between items-center text-[16px] border-b-2 border-stone-300 pb-2">
        <h1 className="text-2xl ">
          <span className="font-bold">shop</span>cart
        </h1>
        <div>
          <button className=" text-black hidden md:flex items-center py-2 rounded-full font-medium">
            <FaUserCircle size={20} className="mr-2" /> Sign In
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
