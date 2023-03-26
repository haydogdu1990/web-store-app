import React from "react";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div>
      <div className="flex w-full mt-2 max-w-7xl mx-auto ">
        <div className="grid h-96 w-72 card bg-base-100 rounded-box place-items-center border border-stone-400">
          content
        </div>
        <div className="grid w-2"></div>
        <div className="grid  w-full card bg-base-100 rounded-box place-items-center border border-stone-400">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Layout;
