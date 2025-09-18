import React from "react";
import logoImage from "../assets/images/logo.jpg";

import {
  Bell,
  ClipboardList,
  History,
  LayoutDashboard,
  ReceiptText,
} from "lucide-react";
import MenuItems from "./MenuItems";

const Header = () => {
  const menuItems = [
    {
      id: 1,
      label: "Dashboard",
      icon: <LayoutDashboard />,
    },
    {
      id: 2,
      label: "Order list",
      icon: <ClipboardList />,
    },
    {
      id: 3,
      label: "History",
      icon: <History />,
    },
    {
      id: 4,
      label: "Bills",
      icon: <ReceiptText />,
    },
  ];

  return (
    <header className="flex justify-between items-center">
      <div className="flex items-center gap-[10px]">
        <div className="h-14 w-14 rounded-full">
          <img src={logoImage} alt="" className="h-full w-full rounded-full" />
        </div>
        <span className="text-2xl font-[500]">Logo here</span>
      </div>
      <nav>
        <ul className="flex items-center gap-10">
          {menuItems.map((item) => (
            <MenuItems key={item.id} itemIcon={item.icon} itemLabel = {item.label}/>
          ))}
        </ul>
      </nav>
      <div>
        <Bell />
        <div>
          <img src="" alt="" />
        </div>
      </div>
    </header>
  );
};

export default Header;
