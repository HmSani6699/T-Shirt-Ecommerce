import React from "react";
import logo from "../../../public/Images/logo.svg";
import TopNavlist from "../../Component/Navlist/TopNavlist";
import { PiUserBold } from "react-icons/pi";
import { HiOutlineShoppingBag } from "react-icons/hi";
import SearchInputField from "../../Component/SearchInputField/SearchInputField";
import { RxHamburgerMenu } from "react-icons/rx";
import { FiSearch } from "react-icons/fi";

const Navber = () => {
  return (
    <div className="bg-bg-white shadow-md">
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
        <div>
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
    </div>
  );
};

export default Navber;
