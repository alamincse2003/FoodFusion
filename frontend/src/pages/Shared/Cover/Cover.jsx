import React from "react";
import { Parallax, Background } from 'react-parallax';

const Cover = ({ img }) => {
  return (
    <Parallax
      blur={{ min: -15, max: 15 }}
      bgImage={img}
      bgImageAlt="the menu"
      strength={-200}
      className="md:h-[600px]  h-screen "
    >
      <div className="container mx-auto pt-24 py-16 text-center  mb-10 md:h-[600px] bg-cover bg-center flex items-center justify-center px-4">
        <div className="bg-white mt-5 md:mt-0  bg-opacity-80 p-6 md:p-10 rounded-lg shadow-lg max-w-2xl text-center">
          <h3 className="text-2xl uppercase md:text-3xl font-bold text-gray-800 mb-4">
            Our Menu
          </h3>
          <p className="text-sm uppercase md:text-lg text-gray-600">
            World Your Like To Try a Dish?
          </p>
        </div>
      </div>
    </Parallax>
  );
};

export default Cover;
