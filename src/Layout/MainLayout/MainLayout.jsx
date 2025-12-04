import React from "react";
import { Outlet } from "react-router";
import Navber from "../../Pages/Navber/Navber";
import Footer from "../../Pages/Footer/Footer";

const MainLayout = () => {
  return (
    <div className="overflow-hidden">
      <Navber />
      <Outlet />
      <Footer />
    </div>
  );
};

export default MainLayout;
