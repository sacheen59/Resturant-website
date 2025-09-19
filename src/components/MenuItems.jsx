import React from "react";
import { NavLink } from "react-router-dom";

const MenuItems = (props) => {
  return (
    // "flex items-center gap-2 hover:text-blue-500"
    <li>
      <NavLink
        to={props.path}
        className={({ isActive }) =>
          `flex items-center gap-2 hover:text-blue-500 ${
            isActive ? "text-blue-500" : "text-black"
          }`
        }
      >
        <span>{props.itemIcon}</span>
        <span>{props.itemLabel}</span>
      </NavLink>
    </li>
  );
};

export default MenuItems;
