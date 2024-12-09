import React from 'react'
import { STEPS } from '../utils/Helper'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const SimpleSteps = () => {
  return (
    <div className='max-lg:pb-[44px]'>
      <div className="2xl:container">
        <h2 className='text-[#00171F] font-normal text-5xl max-md:text-3xl leading-[52.8px] pb-4 text-center'>
          Simple Steps to <span className='font-bold'>Switch</span>
        </h2>
        <p className='font-normal text-base text-[#4B4B4B] max-w-[610px] leading-[25.6px] mx-auto text-center pb-[58px] max-md:pb-10 max-md:mx-auto max-md:px-3'>
          Lorem ipsum dolor sit amet consectetur. Semper vitae nullam eget consectetur mi. Vulputate sapien a a bibendum
        </p>
        <Swiper
          pagination={{
            dynamicBullets: true,
          }}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false, 
          }}
          modules={[Pagination, Autoplay]} 
          className="mySwiper"
          breakpoints={{
            320: {
              slidesPerView: 1,
              centeredSlides: true,
            },
            640: {
              slidesPerView: 2,
              centeredSlides: true,
            },
            992: {
              slidesPerView: 3,
              centeredSlides: false,
            },
            1200: {
              slidesPerView: 4,
              centeredSlides: false,
            },
          }}
        >
          {STEPS.map((STEP, index) => (
            <SwiperSlide key={index}>
              <div className="relative max-w-[360px] max-md:w-full max-xl:max-w-[340px] group">
  <img
    className={`w-full h-full object-cover`}
    src={STEP.src}
    alt={STEP.alt}
  />
  <div
    className={`absolute inset-0 bg-[#003459] bg-opacity-85 group-hover:bg-opacity-0 transition-opacity duration-300`}
  ></div>
</div>

            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default SimpleSteps;
