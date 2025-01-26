import React from "react";

const MenuItem = ({ item }) => {
  const { name, recipe, image, price } = item;
  return (
    <div className="flex flex-col md:flex-row items-center md:items-start space-y-4 md:space-y-0 md:space-x-4 p-4 border rounded-lg shadow-lg">
      <img
        style={{ borderRadius: "0 200px 200px 200px" }}
        className="w-[80px] md:w-[100px] h-[80px] md:h-[100px] object-cover"
        src={image}
        alt="Image"
      />
      <div className="flex-1">
        <h3 className="text-lg font-bold uppercase text-gray-800">
          {name} <span className="text-yellow-500">-----------</span>
        </h3>
        <p className="text-sm text-gray-600">{recipe}</p>
      </div>
      <p className="text-yellow-500 text-lg font-semibold">${price}</p>
    </div>
  );
};

export default MenuItem;
