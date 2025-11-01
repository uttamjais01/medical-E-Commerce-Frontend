import React from 'react';
import { FaPhoneAlt } from 'react-icons/fa';

const Navbar = () => {
  return (
    <nav className="bg-blue-100 w-full font-bold px-4 sm:px-10 py-2 border-t-4 border-blue-300">
      <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center gap-y-2">
        {/* Left Links */}
        <div className="flex flex-wrap justify-center sm:justify-start gap-3 text-sm sm:text-base">
          <a href="#about" className="cursor-pointer">About Us</a>
          <span>|</span>
          <a href="#blog" className="cursor-pointer">Blog</a>
          <span>|</span>
          <a href="#contact" className="cursor-pointer">Contact Us</a>
          <span>|</span>
          <a href="#faq" className="cursor-pointer">FAQ</a>
        </div>

        {/* Right Info */}
        <div className="flex flex-wrap justify-center sm:justify-end items-center gap-2 text-sm sm:text-base text-center sm:text-left">
          <FaPhoneAlt className="text-blue-500" />
          <span>You can contact us 24/7</span>
          <span className="text-blue-400 cursor-pointer">(+12) 354 6789</span>
          <span className="text-gray-700 cursor-pointer">| Free Shipping on orders above $100!</span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;