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
      path: "/",
    },
    {
      id: 2,
      label: "Order list",
      icon: <ClipboardList />,
      path: "/order-list",
    },
    {
      id: 3,
      label: "History",
      icon: <History />,
      path: "/history",
    },
    {
      id: 4,
      label: "Bills",
      icon: <ReceiptText />,
      path: "/bills",
    },
  ];

  return (
    <div className="border-b-1 border-border-color">
      <header className="flex justify-between auto-container items-center h-[70px]">
        <div className="flex items-center gap-[10px]">
          <div className="h-14 w-14 rounded-full">
            <img
              src={logoImage}
              alt=""
              className="h-full w-full rounded-full"
            />
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
                path={item.path}
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
    </div>
  );
};

export default Header;
