import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import Back from '../assets/back.png';

const ScrollSlider = () => {
  const scrollRef = useRef(null);

  const scrollLeft = () => {
    scrollRef.current.scrollBy({ left: -300, behavior: 'smooth' });
  };

  const scrollRight = () => {
    scrollRef.current.scrollBy({ left: 300, behavior: 'smooth' });
  };

  return (
    <div className='m-5'>
      

      <div className='relative'>
        {/* Scroll Buttons */}
        <button
          onClick={scrollLeft}
          className='absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-300 px-3 py-2 rounded-full z-10'
        >
          ◀
        </button>
        <button
          onClick={scrollRight}
          className='absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-300 px-3 py-2 rounded-full z-10'
        >
          ▶
        </button>

        {/* Scrollable List */}
        <div
          ref={scrollRef}
          className='overflow-x-auto whitespace-nowrap scroll-smooth px-10'
        >
          <ul className='flex gap-6 w-max'>
            {[...Array(9)].map((_, i) => (
              <li key={i}>
                <Link to='product/category/'>
                  <img src={Back} alt='' className='h-60 rounded-lg' />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ScrollSlider;