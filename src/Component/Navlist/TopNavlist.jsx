import React from "react";
import { Link, useLocation } from "react-router";

const TopNavlist = ({ title, url, icon, img }) => {
  const { pathname } = useLocation();
  return (
    <Link
      to={url}
      className={` ${pathname === url ? "text-[#ff6347]" : "text-text-black"}`}
    >
      <div className="flex flex-col items-center bg-white ">
        {icon ? icon : img}
        <h2 className="text-[16px]  font-semibold"> {title}</h2>
      </div>
    </Link>
  );
};

export default TopNavlist;
