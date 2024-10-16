// COMPONENTS
import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";
import SideBar from "./SideBar";
import { useState, useEffect } from "react";
import { useAccount } from "wagmi";
import { useNavigate } from "react-router-dom";

const RootLayout = () => {
  const account = useAccount();
  const route = useNavigate();
  const [opened, setOpened] = useState(false);

 
  

  return (
    <div className="w-full flex">
     {/* SIDEBAR */}
     <SideBar opened={opened} setOpened={setOpened} />

      <div className=" flex flex-col w-full ">
        {/* HEADER */}
        <NavBar opened={opened} setOpened={setOpened} />

        {/* Main content area */}
        <div className="flex-grow  md:ml-64 ml-0 px-5">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default RootLayout;
