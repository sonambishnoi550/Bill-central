import React from 'react'

const SimpleSteps = () => {
  return (
    <div>
      <div className="2xl:container">
        <h2 className='text-[#00171F] font-normal text-5xl leading-[52.8px] pb-4 text-center'>Simple Steps to <span className='font-bold'> Switch</span></h2>
        <p className='font-normal text-base text-[#4B4B4B] max-w-[610px] mx-auto text-center pb-[58px]'>Lorem ipsum dolor sit amet consectetur. Semper vitae nullam eget consectetur mi. Vulputate sapien a a bibendum</p>
        <div className="flex flex-wrap">
        <img className='max-w-[360px] max-xl:max-w-[340px] !text-[#EAF9FFF0] opacity-15 hover:opacity-100' src="./assets/images/webp/switch-step-one.webp" alt="step-one" />
          <img className='max-w-[360px] max-xl:max-w-[340px] !text-[#EAF9FFF0] opacity-15 hover:opacity-100' src="./assets/images/webp/switch-step-two.webp" alt="step-two" />
          <img className='max-w-[360px] max-xl:max-w-[340px] !text-[#EAF9FFF0] opacity-15 hover:opacity-100' src="./assets/images/webp/switch-step-three.webp" alt="step-three" />
          <img className='max-w-[360px] max-xl:max-w-[340px] max-xl:mx-auto !text-[#EAF9FFF0] opacity-15 hover:opacity-100' src="./assets/images/webp/switch-step-four.webp" alt="step-four" />
        </div>
      </div>
    </div>
  )
}

export default SimpleSteps
