// COMPONENTS
import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";
import SideBar from "./SideBar";

const RootLayout = () => {
  return (
    <div className="w-full flex">
     {/* SIDEBAR */}
     <SideBar />

      <div className=" flex flex-col w-full ">
        {/* HEADER */}
        <NavBar />

        {/* Main content area */}
        <div className="flex-grow  ml-64 px-5">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default RootLayout;
