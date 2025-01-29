import React from "react";
import "./FoodFusion.css";
const FoodFusion = () => {
  return (
    <div className="foodfusion bg-fixed md:mt-20 mb-10 relative h-screen bg-cover bg-center flex items-center justify-center px-4">
      <div className="bg-white bg-opacity-80 p-6 md:p-10 rounded-lg shadow-lg max-w-2xl text-center">
        <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
          FoodFusion
        </h3>
        <p className="text-sm md:text-lg text-gray-600">
          At FoodFusion, we bring together the best of global flavors to create
          unique and delicious culinary experiences. Our passion for innovative
          cooking blends diverse ingredients, techniques, and cultures to craft
          mouthwatering dishes that satisfy every palate.
        </p>
      </div>
    </div>
  );
};

export default FoodFusion;
