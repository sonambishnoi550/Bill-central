import React from 'react';
import { testimonialsData } from '../utils/Helper';
import { Autoplay, Pagination, } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";
import 'swiper/css/pagination';

const Testimonials = () => {
  return (
    <div className='py-[162px]'>
      <div className="container">
        <h2 className='text-5xl font-normal leading-[52.8px] text-center pb-4 text-black'>
          Our <span>Testimonials</span>
        </h2>
        <p className='font-normal text-base text-[#00171F] text-center max-w-[490px] mx-auto'>
          Lorem ipsum dolor sit amet consectetur. Semper vitae nullam eget consectetur mi. Vulputate sapien a a bibendum
        </p>

        <div className='pt-[62px]'>
          <Swiper
            spaceBetween={30}
            slidesPerView={3}
            breakpoints={{
              320: { slidesPerView: 1, centeredSlides: false },
              640: { slidesPerView: 2, centeredSlides: false },
              1020: { slidesPerView: 3, centeredSlides: false },
            }}
            modules={[Pagination, Autoplay]}

            pagination={{ clickable: true }}
            autoplay={{ autoplay: true }}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
          >
            {testimonialsData.map((testimonial, index) => (
              <SwiperSlide key={index}>
                <div className='border shadow-lg p-5 rounded-md'>
                  <div className='flex pb-6'>
                    <img className='max-w-[60px]' src={testimonial.image} alt={testimonial.name} />
                    <div className='flex-col pl-2'>
                      <p className='font-normal text-2xl leading-[36px]'>{testimonial.name}</p>
                      <p className='font-normal text-base opacity-55'>{testimonial.username}</p>
                    </div>
                  </div>
                  <img src={testimonial.ratingImage} alt="star" />
                  <p className='pt-[18px] max-w-[324px] text-base font-normal leading-6'>
                    {testimonial.text}
                  </p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
