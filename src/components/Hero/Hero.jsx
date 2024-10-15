import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { ToastContainer } from 'react-toastify';

import illustration from '../../assets/images/illustration.avif'
import { useAccount } from "wagmi";

const Hero = () => {
  const account = useAccount();
  const route = useNavigate();

  const handleRoute = () => {
    if(account.isConnected){
      route("/invoice/dashboard");
    }
    else{
      toast.error("Please connect your wallet");
    }
  }
  return (
    <section id='hero'>
      {/* Flex Container */}
      <ToastContainer />
      <div className='container font-roboto flex flex-col-reverse items-center px-9 md:px-6 mx-auto mt-10 space-y-0 md:space-y-0 md:flex-row'>
        {/* Left Item */}
        <div className='flex flex-col mb-32 space-y-12 md:w-1/2'>
          <h1 className='max-w-md text-4xl text-gray-900 font-bold text-center md:text-5xl md:text-left'>
            Revolutionize Your <span className='text-blue-600'>Business Payments.</span> 
          </h1>
          <p className='max-w-sm text-center text-lg text-gray-600 md:text-left'>
              Streamline your invoicing and payments with blockchain technology. Secure, automated, and transparent business transactions for the Web3 era.      
          </p>
          <div className='flex justify-center md:justify-start'>
            <button onClick={handleRoute}
              className='p-3 px-6 text-white shadow-md bg-gradient-to-r to-[#568ce2] from-[#1f3a63] rounded-xl baseline hover:bg-blue-700'
            >
              Get Started
            </button>
          </div>
        </div>
        {/* Image */}
        <div className='md:w-1/2'>
          <img src={illustration} alt='' />
        </div>
      </div>
    </section>
  );
};

export default Hero;
