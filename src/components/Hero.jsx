import React from 'react'
import CustomButton from '../common/CustomButton'
import { ButtonArrowIcon } from '../utils/Icons'
import heroImage from '../assets/images/webp/hero-image.webp'
import dotsImage from '../assets/images/webp/dodo-logo.webp'
import Header from '../components/Header'


const Hero = () => {
  return (
    <div className='bg-hero-bg bg-cover bg-no-repeat max-2xl:bg-contain max-xl:bg-cover bg-top '>
      <Header/>
      <div className='container pt-[109px] max-lg:pt-20 max-md:pt-12 max-sm:pt-8'>
        <div className='flex max-lg:flex-col gap-8'>
          <div className='w-6/12 max-lg:w-full max-lg:text-center flex justify-center'>
            <div>
              <h1 className='text-custom-xl font-normal text-white max-w-[612px] leading-custom-xl max-lg:text-5xl max-md:text-4xl max-sm:text-3xl'>Easily Compare <span className='font-bold'>Energy, Gas, and Internet</span>
                Plans
              </h1>
              <p className='font-normal text-base text-white max-w-[506px] pt-4 pb-[42px] leading-custom-2xl max-lg:pb-6 max-md:text-sm max-sm:pt-2'>Find and switch to the best energy, gas, and internet plans with ease. Our platform simplifies your search, letting you compare providers and make informed decisions, all in one place.</p>
              <div className='flex pl-[22px] p-[9px] rounded-full rounded-tl-none bg-white items-center max-w-[476px] justify-between max-sm:pl-4 max-lg:mx-auto'>
                <input type="text" placeholder='Start typing your address' className='placeholder:text-gray-500 placeholder:text-base placeholder:font-normal outline-none placeholder:max-sm:text-sm' />
                <CustomButton CustomButton="Compare" buttonSpan={<ButtonArrowIcon/>} />
              </div>
            </div>
            <div>
              <p className='font-normal text-black text-custom-lg max-md:text-3xl max-sm:text-2xl max-lg:pt-6 '>More than <span className='text-light-blue'>80,000</span>+ companies trust bill central</p>
            </div>
          </div>
          <div className='w-6/12 max-lg:w-full max-lg:items-center max-lg:flex max-lg:justify-center'>
            <div className='relative'>
              <img className='absolute max-sm:hidden' src={dotsImage} alt="dots" />
              <img className='max-w-[558px] w-full relative' src={heroImage} alt="hero-image" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero