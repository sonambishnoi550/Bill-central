import React from 'react';
import CustomButton from '../common/CustomButton';
import { ButtonArrow } from '../utils/Icons';
import Header from '../common/Header';

const Hero = () => {
  return (
    <div className="bg-hero-bg bg-cover bg-no-repeat max-2xl:bg-contain max-xl:bg-cover bg-top bg-light-blue pb-[44px]" style={{ backgroundImage: `url(./assets/images/webp/hero-bg-image.webp)` }}>
      <Header />
      <div className="container pt-[109px] max-lg:pt-20 max-md:pt-12 max-sm:pt-8">
        <div className="flex max-lg:flex-col gap-8">
          <div className="lg:w-6/12 w-full text-center lg:text-left flex flex-col pt-3">
              <h1 className="text-6xl font-normal text-white leading-[70.4px] !max-lg:leading-[150%] max-lg:text-5xl max-md:text-4xl max-sm:text-3xl">
                Easily Compare <span className="font-bold">Energy, Gas, and Internet</span> Plans
              </h1>
              <p className="text-base font-normal text-white leading-custom-2xl pt-4 pb-[42px] max-lg:pb-6 max-md:text-sm max-sm:pt-2">
                Find and switch to the best energy, gas, and internet plans with ease. Our platform simplifies your search, letting you compare providers and make informed decisions, all in one place.
              </p>
              <div className='flex p-[9px] pl-[22px] bg-white rounded-full rounded-tl-none items-center max-w-[476px] justify-between max-sm:pl-3 max-lg:mx-auto'>
                <input type="text" placeholder='Start typing your address ' className='placeholder:text-gray-500 placeholder:text-base placeholder:font-normal w-full !outline-none !bg-transparent placeholder:max-sm:text-sm mr-2' />
              <CustomButton customButton="Compare" ButtonArrow={<ButtonArrow />} />
              </div>         
          </div>
          <div className="lg:w-6/12 w-full flex justify-center items-center relative">
            <img className="absolute right-[-13%] top-[-8%]  max-w-[200px] max-xl:hidden" src="./assets/images/webp/hero-dots-image.webp" alt="Background dots" />
            <img className="max-w-[558px] max-lg:max-w-[473px] max-lg:w-full relative z-10 max-xl:z-0" src="./assets/images/webp/hero-image.webp" alt="Hero section" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
