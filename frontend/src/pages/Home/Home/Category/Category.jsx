import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "./Category.css";
// Import Swiper styles
import "swiper/css/pagination";

// import required modules
import { Pagination, Autoplay } from "swiper/modules";

import slide1 from "../../../../assets/home/slide1.jpg";
import slide2 from "../../../../assets/home/slide2.jpg";
import slide3 from "../../../../assets/home/slide3.jpg";
import slide4 from "../../../../assets/home/slide4.jpg";
import slide5 from "../../../../assets/home/slide5.jpg";
import SectionTitle from "../../../../components/SectionTitle";
const Category = () => {
  return (
    <section>
      <SectionTitle subHeading={"11.00 am to 10.00 pm"}
      heading={"Order Online"}></SectionTitle>
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        breakpoints={{
          0: {
            slidesPerView: 1, // Mobile screens show 1 slide
          },
          768: {
            slidesPerView: 2, // Tablets show 2 slides
          },
          1024: {
            slidesPerView: 4, // Larger screens show 4 slides
          },
        }}
        modules={[Pagination, Autoplay]}
        className="mySwiper mb-10 mt-10"
      >
        <SwiperSlide>
          <div className="flex flex-col items-center">
            <img
              src={slide1}
              alt="Salad"
              className="w-full h-60 object-cover"
            />
            <h3 className="text-center text-2xl -mt-16 md:text-4xl uppercase  text-white">
              Salads
            </h3>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex flex-col items-center">
            <img
              src={slide2}
              alt="Soups"
              className="w-full h-60 object-cover"
            />
            <h3 className="text-center text-2xl -mt-16 md:text-4xl uppercase  text-white">
              Soups
            </h3>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex flex-col items-center">
            <img
              src={slide3}
              alt="Pizzas"
              className="w-full h-60 object-cover"
            />
            <h3 className="text-center text-2xl -mt-16 md:text-4xl uppercase  text-white">
              Pizzas
            </h3>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex flex-col items-center">
            <img
              src={slide4}
              alt="Desserts"
              className="w-full h-60 object-cover"
            />
            <h3 className="text-center text-2xl -mt-16 md:text-4xl uppercase  text-white">
              Desserts
            </h3>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex flex-col items-center">
            <img
              src={slide5}
              alt="Salad"
              className="w-full h-60 object-cover"
            />
            <h3 className="text-center text-2xl -mt-16 md:text-4xl uppercase  text-white">
              Salads
            </h3>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Category;
