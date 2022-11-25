import React, { useState } from "react";
import { FaUserCircle } from "react-icons/fa";
import { GrLocation } from "react-icons/gr";
import { AiOutlineSearch } from "react-icons/ai";

const navLinks = [
  {
    id: 1,
    title: "Fresh",
  },
  {
    id: 2,
    title: "Today’s Deals",
  },
  {
    id: 3,
    title: "Mobiles",
  },
  {
    id: 4,
    title: "Gift Cards",
  },
  {
    id: 5,
    title: "Women Clothing",
  },
  {
    id: 6,
    title: "Men Clothing",
  },
  {
    id: 7,
    title: "Kids Clothing",
  },
  {
    id: 8,
    title: "Health",
  },
  {
    id: 9,
    title: "Pet Corner",
  },
  {
    id: 10,
    title: "Books",
  },
  {
    id: 11,
    title: "Beauty",
  },
  {
    id: 12,
    title: "Kitchen",
  },
  {
    id: 13,
    title: "Bed Room",
  },
  {
    id: 14,
    title: "Sport",
  },
  {
    id: 15,
    title: "Bags",
  },
];

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
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

      <div className="flex mx-auto justify-between items-center py-3">
        <button className="bg-[#FFAE5D] text-black hidden md:flex items-center text-[16px] rounded-2xl p-[16px] font-medium">
          <GrLocation className="mr-2" /> Dhaka, 1212
        </button>

        {/* search input */}

        <div className=" rounded-full flex items-center px-[16px] py-[10px] border border-gray-300 w-[200px] sm:w-[400px]">
          <input
            className=" p-2 focus:outline-none w-full"
            type="text"
            name=""
            id=""
            placeholder="search "
          />
          <AiOutlineSearch size={25} className="text    -[#808080]" />
        </div>
      </div>

      {/* navlinks */}

      <nav>
        <ul className="list-none sm:flex  justify-between items-center flex-1">
          {navLinks.map((nav, index) => (
            <li
              key={nav.id}
              className={`font-poppins font-medium cursor-pointer text-[16px] text-[ #606060] ${
                index === navLinks.length - 1 ? "mr-0" : "mr-1"
              }`}
            >
              <a href={`#${nav.id}`}>{nav.title}</a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
