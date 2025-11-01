import React from 'react';
import Skin from '../assets/cream.webp';
import { Link } from 'react-router-dom';
import cetaphil from '../assets/cetaphil.png';
import Back from '../assets/back.png';
import ScrollSlider from './ScrollSlider';

const HomePage2 = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Hero Section */}
      <div className="w-full bg-black py-6">
        <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 px-4">
          {/* Card 1 */}
          <div className="bg-orange-100 p-5 rounded-lg shadow-md">
            <Link to="/product/category/68a1a01c65c8051118d05cf5" className="flex flex-col sm:flex-row justify-between gap-4 items-center">
              <div className="flex flex-col text-center sm:text-left">
                <h1 className="text-3xl font-bold mt-2">Skin Therapy</h1>
                <h2 className="text-base mt-4 font-semibold">Transforming skin care<br />from Expert Care</h2>
                <h3 className="flex justify-center sm:justify-start items-center gap-2 mt-4">
                  <span>From</span>
                  <span className="bg-blue-200 px-2 py-1 rounded text-2xl font-medium">$249.99</span>
                </h3>
              </div>
              <img src={Skin} alt="Skin Therapy" className="h-48 sm:h-60 w-auto object-contain rounded-md" />
            </Link>
          </div>

          {/* Card 2 */}
          <div className="bg-blue-400 p-5 rounded-lg shadow-md text-white">
            <Link to="/product/category/68a1a2cc63fabec29b1a83c7" className="flex flex-col sm:flex-row justify-between gap-4 items-center">
              <div className="flex flex-col text-center sm:text-left">
                <h1 className="text-3xl font-bold mt-2">VITAMIN B12</h1>
                <h2 className="mt-4 font-semibold">Boost Energy and vitality<br />with B12 care</h2>
                <h3 className="flex justify-center sm:justify-start items-center gap-2 mt-4">
                  <span>From</span>
                  <span className="bg-blue-500 text-2xl px-2 py-1 font-medium rounded">$359.99</span>
                </h3>
              </div>
              <img src={cetaphil} alt="Cetaphil" className="h-48 sm:h-60 w-auto object-contain" />
            </Link>
          </div>

          {/* Card 3 */}
          <div className="bg-blue-100 p-5 rounded-lg shadow-md">
            <Link to="/product/category/68a1a2cc63fabec29b1a83c8" className="flex flex-col sm:flex-row justify-between gap-4 items-center">
              <div className="flex flex-col text-center sm:text-left">
                <h1 className="text-3xl font-bold mt-2">Women Care</h1>
                <h2 className="mt-4 font-semibold">Skin Repair Cream<br />with Vitamin C</h2>
                <h3 className="flex justify-center sm:justify-start items-center gap-2 mt-4">
                  <span>From</span>
                  <span className="bg-blue-500 text-2xl px-2 py-1 font-medium rounded">$179.99</span>
                </h3>
              </div>
              <img
                src="https://static.vecteezy.com/system/resources/previews/033/020/763/large_2x/blank-unbranded-cosmetic-serum-bottle-on-transparent-background-skin-care-product-cut-out-pink-glass-dropper-mockup-skincare-beauty-front-view-ready-for-your-label-design-generative-ai-png.png"
                alt="Women Care"
                className="h-48 sm:h-60 w-auto object-contain"
              />
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll Slider Section */}
      <div className="max-w-screen-xl mx-auto px-4 py-10">
        <h1 className="text-3xl sm:text-4xl font-bold mb-6">Shop by Health Concerns</h1>
        <ScrollSlider>
          <ul className="flex gap-6 px-2 w-max">
            {Array.from({ length: 9 }).map((_, i) => (
              <li key={i}>
                <Link to="product/category/">
                  <img src={Back} alt={`Health Concern ${i + 1}`} className="h-48 sm:h-60 rounded-lg object-cover" />
                </Link>
              </li>
            ))}
          </ul>
        </ScrollSlider>
      </div>
    </div>
  );
};

export default HomePage2;