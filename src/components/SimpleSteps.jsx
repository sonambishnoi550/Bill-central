import React from 'react'
import { STEPS } from '../utils/Helper'

const SimpleSteps = () => {
  return (
    <div className='max-lg:pb-[44px]'>
      <div className="2xl:container">
        <h2 className='text-[#00171F] font-normal text-5xl max-md:text-3xl leading-[52.8px] pb-4 text-center'>Simple Steps to <span className='font-bold'> Switch</span></h2>
        <p className='font-normal text-base text-[#4B4B4B] max-w-[610px] leading-[25.6px] mx-auto text-center pb-[58px] max-md:pb-10 max-md:mx-auto max-md:px-3'>Lorem ipsum dolor sit amet consectetur. Semper vitae nullam eget consectetur mi. Vulputate sapien a a bibendum</p>
        <div className="flex flex-wrap max-xl:justify-center">
          {STEPS.map((STEP, index) => (
            <img
              key={index}
              className={`max-w-[360px] max-xl:max-w-[340px] text-[#EAF9FFF0] opacity-15 hover:opacity-100 ${index === STEPS.length - 1 ? 'max-xl:mx-auto max-lg:mx-0 !text-[#EAF9FFF0]' : ''
                }`}
              src={STEP.src}
              alt={STEP.alt}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default SimpleSteps
