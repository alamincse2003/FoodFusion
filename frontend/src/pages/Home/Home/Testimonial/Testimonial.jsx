import React, { useEffect, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { FaQuoteLeft } from "react-icons/fa";
import { Rating } from "@smastrom/react-rating";

import "@smastrom/react-rating/style.css";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import { Navigation } from "swiper/modules";

import "./Testimonial.css";
import SectionTitle from "../../../../components/SectionTitle";
const Testimonial = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch("reviews.json")
      .then((response) => response.json())
      .then((data) => setReviews(data));
  }, []);
  return (
    <div>
      <SectionTitle
        heading="Testimonials"
        subHeading="What Our Client Say"
      ></SectionTitle>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        {reviews?.map((review) => (
          <SwiperSlide key={review._id}>
            <div className="bg-white shadow-lg p-6 md:p-8 rounded-lg">
              {/* Star Ratings */}
              <div className="flex justify-center mb-3 text-yellow-500 text-xl">
                <Rating
                  style={{ maxWidth: 180 }}
                  value={review.rating}
                  readOnly
                />
              </div>

              {/* Quote Icon */}
              <FaQuoteLeft className="text-4xl text-gray-600 mx-auto mb-4" />

              {/* Review */}
              <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                {review.details}
              </p>

              {/* Reviewer Name */}
              <h4 className="text-yellow-600 font-bold text-lg mt-4">
                {review.name}
              </h4>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Testimonial;
