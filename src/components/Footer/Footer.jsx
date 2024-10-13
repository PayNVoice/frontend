import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo.png';
import pinterestLogo from '../../assets/images/icon-pinterest.svg';
import { Facebook, Instagram, Twitter, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <div className='bg-gray-900 font-roboto '>
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <img src={logo} className='w-52 h-20' alt='' />
            <div className="flex space-x-4">
              <a href="#" className="hover:text-purple-400 transition-colors">Terms</a>
              <a href="#" className="hover:text-purple-400 transition-colors">Privacy</a>
              <a href="#" className="hover:text-purple-400 transition-colors">Contact</a>
            </div>
          </div>
          <div className='flex justify-between pt-6'>
          <div className='flex justify-center space-x-4'>
            {/* Link 1 */}
            <Link to='#'>
              <Facebook className='text-white'/>
            </Link>
            {/* Link 2 */}
            <Link to='#'>
              <Youtube className='text-white'/>
            </Link>
            {/* Link 3 */}
            <Link to='#'>
              <Twitter className='text-white'/>
            </Link>
            {/* Link 4 */}
            <Link to='#'>
              <img src={pinterestLogo} className='h-6' alt='' />
            </Link>
            {/* Link 5 */}
            <Link to='#'>
             <Instagram className='text-white'/>
            </Link>
          </div>
          <div className="text-center text-sm text-gray-400">
            © 2023 SmartInvoice. All rights reserved.
          </div>
          </div>
        </div>
      </footer>
      
    </div>
  );
};

export default Footer;
