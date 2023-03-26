import React from "react";
import { NavLink } from "react-router-dom";

const Menu = () => {
  return (
    <div className="navbar bg-base-100 rounded-lg mt-2 max-w-7xl mx-auto border border-stone-400">
      <div className="flex-none mx-auto">
        <ul className="menu menu-horizontal px-1">
          <li>
            <NavLink to="/">Ana Sayfa</NavLink>
          </li>
          <li>
            <NavLink to="/product">Ürünler</NavLink>
          </li>

          <li></li>
        </ul>
      </div>
    </div>
  );
};

export default Menu;
