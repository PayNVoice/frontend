import { Link } from 'react-router-dom';

import illustrationIntro from '../../assets/images/illustration-intro.svg';
import illustration from '../../assets/images/illustration.avif'

const Hero = () => {
  return (
    <section id='hero'>
      {/* Flex Container */}
      <div className='container flex flex-col-reverse items-center px-6 mx-auto mt-10 space-y-0 md:space-y-0 md:flex-row'>
        {/* Left Item */}
        <div className='flex flex-col mb-32 space-y-12 md:w-1/2'>
          <h1 className='max-w-md text-4xl font-bold text-center md:text-5xl md:text-left'>
            Revolutionize Your Business Payments with Smart Contracts
          </h1>
          <p className='max-w-sm text-center text-darkGrayishBlue md:text-left'>
              Streamline invoicing, automate payments, 
              and secure transactions with our decentralized invoicing and payment platform.        
          </p>
          <div className='flex justify-center md:justify-start'>
            <Link
              to='/invoice/dashboard'
              className='p-3 px-6 pt-2 text-white shadow-md bg-blue-500 rounded-full baseline hover:bg-blue-700'
            >
              Get Started
            </Link>
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
