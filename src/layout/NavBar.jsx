// COMPONENTS
import ConnectWalletButton from "../components/customButtons/ConnectWalletButton";

const NavBar = () => {
  return (
    <div className="w-full border h-20 flex items-center justify-between px-6">
      <div>
        <p className="text-2xl font-bold text-gray-400 underline">
          pay<span className="text-3xl text-cyan-400 animate-pulse">N</span>voice
        </p>
      </div>
      <div>
        <ConnectWalletButton />
      </div>
    </div>
  );
};

export default NavBar;
