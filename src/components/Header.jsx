import React from "react";
import logoImage from "../assets/images/logo.jpg";
import profileImage from "../assets/images/profile.jpg";

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
    <header className="flex justify-between items-center auto-container h-[65px]">
      <div className="flex items-center gap-[10px]">
        <div className="h-14 w-14 rounded-full">
          <img src={logoImage} alt="" className="h-full w-full rounded-full" />
        </div>
        <span className="text-2xl font-[500]">Logo here</span>
      </div>
      <nav>
        <ul className="flex items-center gap-10">
          {menuItems.map((item) => (
            <MenuItems
              key={item.id}
              itemIcon={item.icon}
              itemLabel={item.label}
            />
          ))}
        </ul>
      </nav>
      <div className="flex gap-6 items-center">
        <span>
          <Bell />
        </span>
        <div>
          <img src={profileImage} alt="proifle-image" />
        </div>
      </div>
    </header>
  );
};

export default Header;
