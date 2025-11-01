import React from 'react';
import { FaPlus, FaRegHeart } from 'react-icons/fa';
import { FaRegUser } from 'react-icons/fa6';
import { IoCartOutline } from 'react-icons/io5';
import { Link } from 'react-router-dom';

const Navbar2 = () => {
  return (
    <div className="mt-5">
      <div className="container mx-auto flex flex-col sm:flex-row flex-wrap items-center justify-between gap-y-6 px-4">
        {/* Logo Section */}
        <div className="flex items-center gap-2 text-blue-500 w-full sm:w-auto justify-center sm:justify-start">
          <FaPlus className="text-4xl sm:text-5xl" />
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-800">HealthMart</h1>
        </div>

        {/* Search Section */}
        <div className="flex flex-col sm:flex-row items-center bg-blue-50 rounded-lg p-2 gap-2 w-full sm:w-auto justify-center">
          <select className="w-full sm:w-40 p-2 text-base rounded border border-gray-300">
            <option defaultValue>All Categories</option>
            <option>Skin Therapy</option>
            <option>Vitamin B12</option>
            <option>Woman Care</option>
            <option>Health Care</option>
            <option>Beauty Care</option>
            <option>Skin Care</option>
            <option>Baby Care</option>
            <option>Hair Care</option>
            <option>Oral Care</option>
            <option>Medicines</option>
          </select>
          <input
            type="text"
            placeholder="Search Product..."
            className="bg-blue-50 w-full sm:w-64 p-2 rounded border border-gray-300 outline-none"
          />
        </div>

        {/* Icons Section */}
        <div className="flex flex-col sm:flex-row items-center gap-6 text-black w-full sm:w-auto justify-center">
          <Link to="/wishlist">
            <FaRegHeart className="text-3xl sm:text-4xl" />
          </Link>

          <Link to="/login" className="flex items-center gap-2">
            <FaRegUser className="text-3xl sm:text-4xl" />
            <div className="text-left">
              <div className="text-base sm:text-xl">My Account</div>
              <div className="font-bold text-base sm:text-xl">Login</div>
            </div>
          </Link>


          <Link to="/product/cart" className="flex items-center gap-2">
            <IoCartOutline className="text-4xl sm:text-5xl font-bold" />
            <div className="text-left">
              <div className="text-base sm:text-xl">Total</div>
              <div className="text-base sm:text-xl">$0.00</div>
            </div>
          </Link>
        </div>
      </div>

      <hr className="w-full border-t border-blue-200 opacity-80 mt-4" />
    </div>
  );
};

export default Navbar2;