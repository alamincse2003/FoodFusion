import React from "react";
import SectionTitle from "../../../../components/SectionTitle";
import featured from "../../../../assets/home/featured.jpg";
import "./FeaturedItems.css";
const FeaturedItems = () => {
  return (
    <div className="featureditems bg-fixed md:mt-20 mb-10 bg-cover bg-center  bg-opacity-60  py-16 px-4 md:px-10 lg:px-20">
      {/* Section Title */}
      <SectionTitle subHeading="Check It Out" heading="From Our Menu" />

      {/* Content Container */}
      <div className="flex flex-col md:flex-row items-center  p-6 md:p-10  max-w-6xl mx-auto space-y-6 md:space-y-0 md:space-x-10">
        {/* Image */}
        <div className="w-full md:w-1/2">
          <img
            className="w-full h-auto rounded-lg"
            src={featured}
            alt="Featured Dish"
          />
        </div>

        {/* Text Content */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h3 className="text-xl md:text-2xl text-white font-semibold mb-2">
            March 20, 2023 - Special Dish
          </h3>
          <p className="text-sm md:text-base text-gray-300">
            Experience the best fusion of flavors with our signature dishes. At
            FoodFusion, we take pride in blending diverse culinary traditions to
            bring you a meal like no other. Taste the magic of global cuisine in
            every bite!
          </p>

          {/* Button */}
          <button className="mt-4  border-b-4  border-yellow-500 text-yellow-500 px-6 py-2 rounded-lg transition-all duration-300 hover:bg-yellow-500 hover:text-black">
            Read More
          </button>
        </div>
      </div>
    </div>
  );
};

export default FeaturedItems;
