// COMPONENTS
import ConnectWalletButton from "../components/customButtons/ConnectWalletButton";

const NavBar = () => {
  return (
    <div className="w-full bg-white shadow-sm h-20 flex items-center justify-end px-6">
      <div>
        <ConnectWalletButton />
      </div>
    </div>
  );
};

export default NavBar;
