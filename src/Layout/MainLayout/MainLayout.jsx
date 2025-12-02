import React from "react";
import { Outlet } from "react-router";

const MainLayout = () => {
  return (
    <div>
      <div>Nabver</div>
      <Outlet />
      <div>Footer</div>
    </div>
  );
};

export default MainLayout;
