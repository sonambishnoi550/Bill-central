import React from 'react'

const WhyChoose = () => {
  return (
    <div className='pb-[162px]'>
      <div className="container">
        <h2 className='font-normal text-5xl text-[#00171F leading-[52.8px] text-center'>Why Choose Us for <span className='font-bold'>Utilities</span> </h2>
        <p className='text-base font-normal leading-[24px] max-w-[620px] text-center mx-auto pt-4 pb-[58px]'>This emphasizes both the action and the benefits, drawing in potential customers with a clear value proposition. Let me know if you'd like any adjustments!</p>
        <div className='flex gap-6 justify-between'>
          <div className='bg-[#003459] p-10'>
            <img className='max-w-[232px]' src="./assets/images/svg/star-like.svg" alt="star-like" />
            <h5 className='font-normal text-2xl leading-[26.4px] text-white pt-8'>Tailored Recommendations</h5>
            <p className='font-normal text-base text-white max-w-[344px] pt-3 pb-[22px]'>Our platform analyzes your unique energy needs and preferences to suggest the best utility providers, ensuring you get the most personalized options available.</p>
            <a href=""><img className='bg-white py-[22px] px-[26px] rounded-[446px]' src="./assets/images/svg/like-arrow.svg" alt="like-arrow" /></a>
          </div>
          <div className='flex-col  justify-between'>
            <div className='border p-6 shadow-lg max-w-[334px] mb-6'>
              <img className='max-w-[60px]' src="./assets/images/svg/process.svg" alt="star-like" />
              <h5 className='font-normal text-2xl leading-[26.4px] text-black pt-[18px]'>Simplified Comparison Process</h5>
              <p className='font-normal text-base text-black max-w-[286px] pt-3'>Our intuitive platform lets you compare the best utility providers in one place, helping you make a quick and informed decision.</p>
            </div>
            <div className='border p-6 shadow-lg max-w-[334px]'>
              <img className='max-w-[60px]' src="./assets/images/svg/no-service.svg" alt="star-like" />
              <h5 className='font-normal text-2xl leading-[26.4px] text-black pt-[18px] '>No Service Interruptions</h5>
              <p className='font-normal text-base text-black max-w-[286px] pt-3 pb-[50px]'>We take care of the entire switching process so you can enjoy a hassle-free experience with zero downtime..</p>
            </div>
          </div>
          <div className='flex-col justify-between'>
            <div className='border p-6 shadow-lg max-w-[334px] mb-6'>
              <img className='max-w-[60px]' src="./assets/images/svg/time.svg" alt="star-like" />
              <h5 className='font-normal text-2xl leading-[26.4px] text-black pt-[18px]'>Save Time and Money</h5>
              <p className='font-normal text-base text-black max-w-[286px] pt-3 pb-[50px]'>With up-to-date plans and pricing, you can be sure you’re getting the most competitive rates available.</p>
            </div>
            <div className='border p-6 shadow-lg max-w-[334px]'>
              <img className='max-w-[60px]' src="./assets/images/svg/support.svg" alt="star-like" />
              <h5 className='font-normal text-2xl leading-[26.4px] text-black pt-[18px]'>Comprehensive Support</h5>
              <p className='font-normal text-base text-black max-w-[286px] pt-3 pb-[26px]'>Whether you need assistance selecting a plan or during the switch, our dedicated support team is here to help every step of the way.</p>
            </div>
          </div>

        </div>
      </div>

    </div>
  )
}

export default WhyChoose
