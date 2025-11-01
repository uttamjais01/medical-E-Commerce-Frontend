import React from 'react';
import Santizer from '../assets/sant.png';
import { Link } from 'react-router-dom';

const Page2 = () => {
  return (
    <div className="w-full h-[550px] bg-blue-100 py-10">
      <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-6 px-4 sm:px-10">
        {/* Text Section */}
        <div className="text-center md:text-left">
          <h1 className="italic tracking-wide text-3xl sm:text-6xl font-medium">
            Sanitize For Safety<br />Protect Your Health
          </h1>
          <h2 className="text-base sm:text-xl text-blue-400 font-normal mt-4">
            Our only wish is to introduce you to your products of the leading<br />
            Don't miss top brands in gardening!
          </h2>
          <div className="flex justify-center md:justify-start mt-6">
            <Link
              to="/getProduct"
              className="px-4 py-2 bg-blue-400 rounded-xl text-white text-lg sm:text-xl hover:bg-blue-500 transition"
            >
              Shop Now →
            </Link>
          </div>
        </div>

        {/* Image Section */}
        <div className="flex justify-center">
          <img
            src={Santizer}
            alt="Sanitizer"
            className="w-full sm:w-[360px] h-auto max-h-[400px] object-contain rounded shadow"
          />
        </div>
      </div>
    </div>
  );
};

export default Page2;