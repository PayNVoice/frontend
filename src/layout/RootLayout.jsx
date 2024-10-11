// COMPONENTS
import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";
import SideBar from "./SideBar";

const RootLayout = () => {
  return (
    <div className="w-full h-screen overflow-hidden">
      {/* HEADER */}
      <NavBar />

      <div className="w-full h-full flex">
        {/* SIDEBAR */}
        <SideBar />

        {/* Main content area */}
        <div className="flex-grow px-10">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default RootLayout;
