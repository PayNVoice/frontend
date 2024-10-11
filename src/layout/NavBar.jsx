// COMPONENTS
import { Menu, X } from "lucide-react";
import ConnectWalletButton from "../components/customButtons/ConnectWalletButton";

const NavBar = ({opened,setOpened}) => {
  return (
    <div className="w-full bg-white shadow-sm h-20 flex items-center justify-between px-6">
      <div className="md:flex hidden "></div>
      <div className="border md:hidden flex ">
        {
          opened ? <X  onClick={()=>setOpened(false)} className="cursor-pointer" /> : <Menu onClick={()=>setOpened(true)} className="cursor-pointer" />
        }
      </div>
      <div className="">
        <ConnectWalletButton />
      </div>
    </div>
  );
};

export default NavBar;
