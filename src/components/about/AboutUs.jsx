import React from 'react';
import { LOREM_ITEM } from '../../utils/Helper';
import { NavLink } from 'react-router-dom';

const AboutUs = () => {
  return (
    <div className="pt-10 flex justify-center items-center min-h-screen">
      <div className="container px-4">
        <div className="flex justify-between gap-4 max-lg:flex-wrap">
          {LOREM_ITEM.map((item, index) => (
            <NavLink
              key={index}
              to={`/about?${item.id}`}
              className="border border-red-950 p-5 lg:max-w-[450px] max-w-[300px] mx-auto mb-4 lg:mb-0"
            >
              <h2 className="font-bold text-2xl md:text-3xl lg:text-5xl text-center pb-3">
                {item.title}
              </h2>
              <p className="font-medium text-base md:text-lg lg:text-xl text-center !max-w-[400px]">
                {item.description}
              </p>
            </NavLink>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
