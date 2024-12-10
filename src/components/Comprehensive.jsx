import React, { useState } from 'react';

const Comprehensive = () => {
  const [openElectricity, setOpenElectricity] = useState(false);
  const [openGas, setOpenGas] = useState(false);
  const [openInternet, setOpenInternet] = useState(false);
  const [openBundle, setOpenBundle] = useState(false);

  const toggleMenu = (menu) => {
    if (menu === 'electricity') {
      setOpenElectricity(!openElectricity);
    } else if (menu === 'gas') {
      setOpenGas(!openGas);
    } else if (menu === 'internet') {
      setOpenInternet(!openInternet);
    } else if (menu === 'bundle') {
      setOpenBundle(!openBundle);
    }
  };

  return (
    <div className='py-[162px]'>
      <div className="container">
        <div className="lg:flex justify-between">
          <div className='lg:w-6/12 w-full'>
            <h2 className='font-normal text-5xl max-md:text-[32px] text-[#00171F] max-w-[456px] leading-[52.8px] pb-[46px]'>
              Comprehensive Utility <span className='font-bold'> Comparisons</span>
            </h2>
            <div className="space-y-6">
              {/* Electricity Plan Comparisons */}
              <div className="bg-white hover:shadow-md rounded-md p-[14px] border transition-all duration-700">
                <button
                  onClick={() => toggleMenu('electricity')}
                  className="w-full text-left font-medium text-2xl flex leading-[26.4px] items-center max-md:text-lg lg:whitespace-nowrap"
                >
                  <img className='w-[64px] mr-6' src="./assets/images/webp/blub-image.png" alt="blub" />
                  Electricity Plan Comparisons
                  <span className="text-xl ml-[106px] max-xl:ml-[53px] max-sm:ml-0 max-lg:ml-[253px]">{openElectricity ? '−' : '＋'}</span>
                </button>
                {openElectricity && (
                  <p className="mt-2 text-gray-600 text-base font-normal leading-[25.6px] ml-[87px]">
                    Whether you want renewable energy, low rates, or flexible contracts, we'll help you find the best provider.
                  </p>
                )}
              </div>

              {/* Gas Plan Comparisons */}
              <div className="bg-white hover:shadow-md rounded-md p-[14px] border transition-all duration-700">
                <button
                  onClick={() => toggleMenu('gas')}
                  className="w-full text-left font-medium text-2xl flex leading-[26.4px] items-center max-md:text-lg lg:whitespace-nowrap"
                >     <img className='w-[64px] mr-6' src="./assets/images/webp/utility-two-image.png" alt="blub" />
                  Gas Plan Comparisons
                  <span className="text-xl ml-[163px] max-xl:ml-[113px] max-sm:ml-[11px] max-lg:ml-[313px]">{openGas ? '−' : '＋'}</span>
                </button>
                {openGas && (
                  <p className="mt-2 text-gray-600 text-base font-normal leading-[25.6px] ml-[87px]">
                    Compare gas plans to find the best rates and providers for your needs.
                  </p>
                )}
              </div>

              {/* Internet Plan Comparisons */}
              <div className="bg-white hover:shadow-md rounded-md p-[14px] border transition-all duration-700">
                <button
                  onClick={() => toggleMenu('internet')}
                  className="w-full text-left font-medium text-2xl flex leading-[26.4px] items-center max-md:text-lg sm:whitespace-nowrap"
                >     <img className='w-[64px] mr-6' src="./assets/images/webp/utility-three-image.png" alt="blub" />
                  Internet Plan Comparisons
                  <span className="text-xl ml-[127px] max-xl:ml-[78px] max-sm:ml-0 max-lg:ml-[277px]">{openInternet ? '−' : '＋'}</span>
                </button>
                {openInternet && (
                  <p className="mt-2 text-gray-600 text-base font-normal leading-[25.6px] ml-[87px]">
                    Find the best internet plans with fast speeds and great customer support.
                  </p>
                )}
              </div>

              {/* Bundle Packages */}
              <div className="bg-white hover:shadow-md rounded-md p-[14px] border transition-all duration-700">
                <button
                  onClick={() => toggleMenu('bundle')}
                  className="w-full text-left font-medium text-2xl flex leading-[26.4px] items-center max-md:text-lg lg:whitespace-nowrap"
                >     <img className='w-[64px] mr-6' src="./assets/images/webp/utility-four-image.png" alt="blub" />
                  Bundle Packages
                  <span className="text-xl ml-[220px] max-xl:ml-[175px] max-sm:ml-[61px] max-lg:ml-[375px]">{openBundle ? '−' : '＋'}</span>
                </button>
                {openBundle && (
                  <p className="mt-2 text-gray-600 text-base font-normal leading-[25.6px] ml-[87px]">
                    Get the best value by bundling utilities and services together.
                  </p>
                )}
              </div>
            </div>
          </div>
          <div className='lg:w-6/12 flex justify-end max-lg:justify-center'>
<img className='max-w-[500px] xl:h-[535px] lg:h-[470px] max-xl:max-w-[470px] max-sm:max-w-[336px] mt-10' src="./assets/images/webp/interior-designer-image.webp" alt="designer" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Comprehensive;
