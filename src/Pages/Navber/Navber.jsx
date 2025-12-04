import React, { useState } from "react";
import logo from "../../../public/Images/logo.svg";
import TopNavlist from "../../Component/Navlist/TopNavlist";
import { PiUserBold } from "react-icons/pi";
import { HiOutlineShoppingBag } from "react-icons/hi";
import SearchInputField from "../../Component/SearchInputField/SearchInputField";
import { RxHamburgerMenu } from "react-icons/rx";
import { FiSearch } from "react-icons/fi";
import { IoMdClose } from "react-icons/io";

const Navber = () => {
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  return (
    <div className="bg-bg-white shadow-md relative">
      {/* Pc navber */}
      <div className="max-w-[1200px] mx-auto py-[15px]  items-center justify-between lg:flex hidden">
        {/* Logo */}
        <div>
          <img src={logo} alt="" />
        </div>
        {/* Search */}
        <div>
          <SearchInputField />
        </div>
        {/* menu */}
        <div className="flex items-center gap-[35px]">
          <TopNavlist title={"Home"} />
          <TopNavlist title={"Product"} />
          <TopNavlist title={"About US"} />
          <TopNavlist img={<PiUserBold className="text-[21px]" />} />
          <TopNavlist img={<HiOutlineShoppingBag className="text-[21px]" />} />
        </div>
      </div>

      {/* Mobile navber */}
      <div className="flex items-center justify-between lg:hidden px-5 py-2.5">
        <div onClick={() => setIsOpenMenu(!isOpenMenu)}>
          <RxHamburgerMenu className="text-text-black text-[20px] " />
        </div>

        {/* logo */}
        <div>
          <img src={logo} alt="" />
        </div>

        {/* cart and search */}
        <div className="flex items-center gap-5">
          <FiSearch className="text-[20px] text-text-black" />
          <HiOutlineShoppingBag className="text-[21px] text-text-black" />
        </div>
      </div>

      {/* Mobile Drawer + Overlay */}
      <div
        className={`fixed inset-0 z-40 transition-all duration-300 
        ${isOpenMenu ? "bg-black/50 visible" : "bg-transparent invisible"}
      `}
      >
        {/* Drawer menu */}
        <div
          className={`fixed top-0 left-0 h-full w-full bg-white
          transition-transform duration-300 
          ${isOpenMenu ? "translate-x-0" : "-translate-x-full"}
        `}
        >
          <div className="p-4 bg-red-500 w-full flex items-center justify-between">
            <div className="flex items-center gap-5 text-text-white">
              <h2>Menu</h2>
              <h2>Categories</h2>
            </div>
            <button
              onClick={() => setIsOpenMenu(false)}
              className=" text-white font-bold "
            >
              <IoMdClose className="text-[25px]" />
            </button>
          </div>

          {/* Example menu items */}
          <ul className="text-text-black px-4   bg-bg-white">
            <li className="border-b border-gray-200 py-2.5">Home</li>
            <li className="border-b border-gray-200 py-2.5">Shop</li>
            <li className="border-b border-gray-200 py-2.5">Women</li>
            <li className="border-b border-gray-200 py-2.5">Men</li>
            <li className="border-b border-gray-200 py-2.5">Kids</li>
            <li className="border-b border-gray-200 py-2.5">Contact</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navber;
