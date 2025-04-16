import React from "react";

const FoodCard = ({ item }) => {
  const { name, image, price, recipe } = item;

  return (
    <div className="mb-5 w-full sm:w-[90%] md:w-80 lg:w-96 bg-white shadow-lg rounded-lg overflow-hidden border border-gray-200 mx-auto flex flex-col justify-between">
      <div>
        <div className="relative">
          <img src={image} alt={name} className="w-full h-56 object-cover" />
          <p className="absolute top-4 right-4 bg-gray-900 text-white px-3 py-1 text-sm font-semibold rounded">
            ${price}
          </p>
        </div>
        <div className="p-4 text-center">
          <h2 className="text-lg md:text-xl font-semibold text-gray-800">
            {name}
          </h2>
          <p className="text-gray-600 mt-2 text-sm md:text-base">{recipe}</p>
        </div>
      </div>
      <div className="p-4">
        <button className="w-full min-h-[48px] flex items-center justify-center bg-orange-500 text-white font-semibold rounded-lg shadow-md hover:bg-orange-600 transition duration-300">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default FoodCard;
