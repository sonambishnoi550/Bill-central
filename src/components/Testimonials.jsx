import React from 'react'

const Testimonials = () => {
  return (
    <div className='py-[162px]'>
      <div className="container">
        <h2 className='text-5xl font-normal leading-[52.8px] text-center pb-4 text-black'>Our <span> Testimonials</span></h2>
        <p className='font-normal text-base text-[#00171F] text-center max-w-[490px] mx-auto'>Lorem ipsum dolor sit amet consectetur. Semper vitae nullam eget consectetur mi. Vulputate sapien a a bibendum</p>
        <div className='flex pt-[62px] gap-6'>
          <div className='border shadow-lg p-5 rounded-md'>
            <div className='flex pb-6'>
              <img className='max-w-[60px]' src="./assets/images/svg/cameron.svg" alt="camron" />
              <div className='flex-col pl-2'>     <p className='font-normal text-2xl leading-[36px]'>Camron</p>
                <p className='font-normal text-base opacity-55'>@cameron</p>
              </div>
            </div>
            <img src="./assets/images/svg/five-star.svg" alt="star" />
            <p className='pt-[18px] max-w-[324px] text-base font-normal leading-6'> Lorem adipis cing elit ipsum dolor sit amet, consectetur adipis cing elit. Vivamus lacinia odio  adipiscing elit vitae vestibulum vestibulum.</p>
          </div>
          <div className='border shadow-lg p-5 rounded-md'>
            <div className='flex pb-6'>
              <img className='max-w-[60px]' src="./assets/images/svg/ronald.svg" alt="Ronald" />
              <div className='flex-col pl-2'><p className='font-normal text-2xl leading-[36px]'>Ronald</p>
                <p className='font-normal text-base opacity-55'>@ronald</p>
              </div>
            </div>
            <img src="./assets/images/svg/five-star.svg" alt="star" />
            <p className='pt-[18px] max-w-[324px] text-base font-normal leading-6'> Lorem adipis cing elit ipsum dolor sit amet, consectetur adipis cing elit. Vivamus lacinia odio  adipiscing elit vitae vestibulum vestibulum.</p>
          </div>
          <div className='border shadow-lg p-5 rounded-md'>
            <div className='flex pb-6'>
              <img className='max-w-[60px]' src="./assets/images/svg/jay.svg" alt="Jay Shah" />
              <div className='flex-col pl-2'><p className='font-normal text-2xl leading-[36px]'>Jay Shah</p>
                <p className='font-normal text-base opacity-55'>@jayshah</p>
              </div>
            </div>
            <img src="./assets/images/svg/five-star.svg" alt="star" />
            <p className='pt-[18px] max-w-[324px] text-base font-normal leading-6'> Lorem adipis cing elit ipsum dolor sit amet, consectetur adipis cing elit. Vivamus lacinia odio  adipiscing elit vitae vestibulum vestibulum.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Testimonials
