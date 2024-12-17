import React, { useState } from 'react';
import { items } from '../../utils/Helper';

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleClick = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="flex items-center justify-center pt-20">
      <div className="container mx-auto">
        <h2 className='font-bold text-center text-5xl pb-5'>FAQ</h2>
        <div>
          {items.map((item, index) => (
            <div
              key={index}
              className="lg:max-w-[552px] mx-auto w-full border-b border-gray-300 transition-all duration-1000"
            >
           
              <button
                onClick={() => handleClick(index)}
                className="w-full flex justify-between items-center font-medium text-black text-base sm:text-lg sm:py-4 py-3 transition-all duration-1000"
              >
                <span>{item.title}</span>
                <span
                  className={`transform transition-transform duration-1000 ease-in-out ${activeIndex === index ? 'rotate-180' : 'rotate-0'}`}
                >
                  {activeIndex === index ? '-' : '+'}
                </span>
              </button>

           
              <div
                className={`transition-all duration-500 ease-in-out overflow-hidden ${activeIndex === index
                  ? 'max-h-[200px] opacity-100'
                  : 'max-h-0 opacity-0'
                  }`}
              >
                <p className=" py-2">{item.content}</p> 
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;
