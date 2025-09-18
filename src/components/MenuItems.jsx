import React from "react";

const MenuItems = (props) => {
  return (
    <li className="flex items-center gap-1">
      <span>{props.itemIcon}</span>
      <a href="">{props.itemLabel}</a>
    </li>
  );
};

export default MenuItems;
