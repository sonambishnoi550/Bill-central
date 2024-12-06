import React from 'react';
import CustomButton from '../common/CustomButton';
import {ButtonArrowIcon} from '../utils/Icons';
import heroImage from '../assets/images/webp/hero-image.webp';
import dotsImage from '../assets/images/webp/dodo-logo.webp';
import Header from '../common/Header';

const Hero = () => {
  return (
    <div className="bg-hero-bg bg-cover bg-no-repeat max-2xl:bg-contain max-xl:bg-cover bg-top bg-light-blue">
      <Header/>
      <div className="container pt-[109px] max-lg:pt-20 max-md:pt-12 max-sm:pt-8">
        <div className="flex max-lg:flex-col gap-8">
          <div className="lg:w-6/12 w-full text-center lg:text-left flex justify-center">
            <div>
              <h1 className="text-custom-xl font-normal text-white leading-custom-xl max-lg:text-5xl max-md:text-4xl max-sm:text-3xl">
                Easily Compare <span className="font-bold">Energy, Gas, and Internet</span> Plans
              </h1>
              <p className="text-base font-normal text-white leading-custom-2xl pt-4 pb-[42px] max-lg:pb-6 max-md:text-sm max-sm:pt-2">
                Find and switch to the best energy, gas, and internet plans with ease. Our platform simplifies your search, letting you compare providers and make informed decisions, all in one place.
              </p>
              <div className="flex items-center bg-white rounded-full p-[9px] max-w-[476px] mx-auto lg:mx-0">
                <label htmlFor="addressInput" className="sr-only">
                  Address
                </label>
                <input
                  id="addressInput"
                  type="text"
                  placeholder="Start typing your address"
                  className="flex-grow placeholder-gray-500 text-base font-normal outline-none max-sm:text-sm"
                />
                <CustomButton label="Compare" icon={<ButtonArrowIcon />} />
              </div>
            </div>
            <div className="pt-6">
              <p className="font-normal text-black !text-custom-lg max-md:text-3xl max-sm:text-2xl">
                More than <span className="text-light-blue">80,000</span>+ companies trust Bill Central
              </p>
            </div>
          </div>
          <div className="lg:w-6/12 w-full flex justify-center items-center relative">
            <img className="absolute left-[40%'" src={dotsImage} alt="Background dots" />
            <img className="max-w-[558px] w-full relative" src={heroImage} alt="Hero section" />
          </div>
        </div>
      </div>
    </div
  );
};

export default Hero;
