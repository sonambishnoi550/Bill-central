import React from 'react';
import { LOREM_ITEM } from '../../utils/Helper';
import { NavLink } from 'react-router-dom';

const AboutUs = () => {
  return (
    <div className="flex min-h-screen justify-center items-center">
      <div className="container">
        <div className="flex justify-between gap-4 max-lg:flex-wrap">
          {LOREM_ITEM.map((data, index) => (
            <NavLink key={index} to={`/about?${data.id}`}>
              <div className="border border-grayish-blue p-6 max-w-[400px] max-lg:max-w-[300px] mx-auto lg:mb-0 mb-4 cursor-pointer">
                <h2 className="text-center font-bold text-5xl">{data.title}</h2>
                <p className="text-center pt-2 max-w-[400px] mx-auto">
                  {data.description}
                </p>
              </div>
            </NavLink>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
