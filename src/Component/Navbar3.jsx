import React from 'react';

const Navbar3 = () => {
  return (
    <div className="bg-white py-4">
      <div className="container mx-auto flex flex-wrap items-center justify-between gap-4 px-4 text-base sm:text-xl">
        {/* Dropdowns */}
        <div className="flex flex-wrap gap-4 w-full sm:w-auto">
          <select className="px-4 py-2 outline-none w-full sm:w-auto rounded">
            <option>Home</option>
            <option>Hair</option>
            <option>Oral</option>
            <option>Skin</option>
          </select>

          <select className="px-4 py-2 outline-none w-full sm:w-auto rounded">
            <option disabled selected>Shop</option>
            <option>Hair</option>
            <option>Oral</option>
            <option>Skin</option>
          </select>

          <select className="px-4 py-2 outline-none w-full sm:w-auto rounded">
            <option disabled selected>Categories 🔥</option>
            <option>Hair</option>
            <option>Oral</option>
            <option>Skin</option>
          </select>

          <select className="px-4 py-2 outline-none w-full sm:w-auto rounded">
            <option disabled selected>Products</option>
            <option>Hair Oil</option>
            <option>Toothpaste</option>
            <option>Face Cream</option>
          </select>

          <select className="px-4 py-2 outline-none w-full sm:w-auto  rounded">
            <option disabled selected>Top Deals</option>
            <option>Combo Packs</option>
            <option>Seasonal Offers</option>
            <option>Clearance</option>
          </select>

          <select className="px-4 py-2 outline-none bg-gray-50 rounded w-full sm:w-auto ">
            <option disabled selected>Elements</option>
            <option>Icons</option>
            <option>Buttons</option>
            <option>Cards</option>
          </select>
        </div>

        {/* Discount Banner */}
        <div className="text-red-500 font-bold order-last sm:order-none w-full sm:w-auto text-center sm:text-left">
          Super Discount
        </div>
      </div>
    </div>
  );
};

export default Navbar3;