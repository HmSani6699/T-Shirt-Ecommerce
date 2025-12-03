import React from "react";
import { Outlet } from "react-router";
import Navber from "../../Pages/Navber/Navber";
import Footer from "../../Pages/Footer/Footer";

const MainLayout = () => {
  return (
    <div>
      <Navber />
      <Outlet />
      <Footer />
    </div>
  );
};

export default MainLayout;
