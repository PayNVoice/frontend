import { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";

// ASSETS
import {
  FaFileInvoiceDollar,
  FaUsers,
  FaCog,
  FaChartLine,
} from "react-icons/fa";

// Dummy nav items
const navItems = [
  {
    id: 1,
    name: "Create Invoice",
    path: "/invoice/test",
    icon: FaFileInvoiceDollar,
  },
  { id: 2, name: "Customers", path: "/customers", icon: FaUsers },
  { id: 3, name: "Reports", path: "/reports", icon: FaChartLine },
  { id: 4, name: "Settings", path: "/settings", icon: FaCog },
];

const SideBar = () => {
  const location = useLocation();
  const [activeNav, setActiveNav] = useState("");

  // Update the active path on route change
  useEffect(() => {
    setActiveNav(location.pathname);
  }, [location]);

  return (
    <div className="w-[260px] border h-full py-6">
      <div className="w-full flex flex-col gap-2">
        {navItems.map((item) => (
          <NavLink
            key={item.id}
            to={item.path}
            className={`w-full h-10 cursor-pointer border-x-[8px] border-transparent flex items-center gap-5 px-3 ${
              activeNav === item.path
                ? "bg-cyan-100 border-cyan-400 text-cyan-700"
                : "hover:border-cyan-400 hover:bg-cyan-100 text-gray-400 hover:text-cyan-700"
            }`}
            onClick={() => setActiveNav(item.path)}
          >
            <item.icon className={`text-xl`} />
            <p>{item.name}</p>
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default SideBar;
