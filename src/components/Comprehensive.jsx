import React, { useState } from 'react';
import { planComparisons } from '../utils/Helper'; // Ensure this file exports the data correctly

const Comprehensive = () => {
  const [openSection, setOpenSection] = useState(null);

  const toggleMenu = (menu) => {
    setOpenSection((prev) => (prev === menu ? null : menu));
  };

  return (
    <div className='py-[162px]'>
      <div className="container">
        <div className="lg:flex justify-between">
          {/* Left Section */}
          <div className='lg:w-6/12 w-full'>
            <h2 className='font-normal text-5xl max-md:text-[32px] text-[#00171F] max-w-[456px] leading-[52.8px] pb-[46px]'>
              Comprehensive Utility <span className='font-bold'> Comparisons</span>
            </h2>
            <div className="space-y-6">
              {planComparisons.map((plan) => (
                <div
                  key={plan.id}
                  className="bg-white hover:shadow-md rounded-md p-[14px] border transition-all duration-700"
                >
                  <button
                    onClick={() => toggleMenu(plan.id)}
                    className="w-full text-left font-medium text-2xl flex leading-[26.4px] items-center max-md:text-lg lg:whitespace-nowrap"
                  >
                    <img className='w-[64px] mr-6' src={plan.imgSrc} alt={plan.title} />
                    {plan.title}
                    <span className={`text-xl ${plan.marginClass}`}>
                      {openSection === plan.id ? (
                        <img src="./assets/images/svg/open.svg" alt="Collapse" className="h-5 w-5" />
                      ) : (
                        <img src="./assets/images/svg/close.svg" alt="Expand" className="h-5 w-5" />
                      )}
                    </span>
                  </button>
                  {openSection === plan.id && (
                    <p className="mt-2 text-gray-600 text-base font-normal leading-[25.6px] ml-[87px]">
                      {plan.description}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Right Section */}
          <div className='lg:w-6/12 flex justify-end max-lg:justify-center'>
            <img
              className='max-w-[500px] xl:h-[535px] lg:h-[470px] max-xl:max-w-[470px] max-sm:max-w-[336px] mt-10'
              src="./assets/images/webp/interior-designer-image.webp"
              alt="designer"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Comprehensive;
