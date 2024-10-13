import { useState } from 'react';
import { Link } from 'react-router-dom';

import logo from '../../assets/images/logo.png';
import ConnectWalletButton from '../customButtons/ConnectWalletButton';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <nav className='relative container mx-auto p-6'>
      {/* Flex Container */}
      <div className='flex items-center justify-between'>
        {/* Logo */}
        <div className=' bg-black'>
          <img src={logo} className='w-28 h-12' alt='' />
        </div>
        <ConnectWalletButton/>

        {/* Hamburger Icon */}
        {/* <button
          className={
            toggleMenu
              ? 'open block hamburger md:hidden focus:outline-none'
              : 'block hamburger md:hidden focus:outline-none'
          }
          onClick={() => setToggleMenu(!toggleMenu)}
        >
          <span className='hamburger-top'></span>
          <span className='hamburger-middle'></span>
          <span className='hamburger-bottom'></span>
        </button> */}
      </div>

      {/* Mobile Menu */}
      <div className='md:hidden'>
        <div
          className={
            toggleMenu
              ? 'absolute flex flex-col items-center self-end py-8 mt-10 space-y-6 font-bold bg-white sm:w-auto sm:self-center left-6 right-6 drop-shadow-md'
              : 'absolute flex-col items-center hidden self-end py-8 mt-10 space-y-6 font-bold bg-white sm:w-auto sm:self-center left-6 right-6 drop-shadow-md'
          }
        >
          <Link
          to='/invoice/test'
          className=' p-3 px-6 pt-2 text-white bg-blue-500 rounded-full baseline hover:bg-blue-700 md:block'
        >
          Get Started
        </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
