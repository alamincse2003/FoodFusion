import React from "react";
import { Helmet } from "react-helmet-async";

const Menu = () => {
  return (
    <>
      <Helmet>
        <title>FoodFusion | Our Menu</title>
      </Helmet>

      <section className="container mx-auto px-4 pt-24 py-16 text-center">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
          Our Menu
        </h1>
        <p className="text-gray-600 mt-4">
          Discover a variety of mouthwatering dishes made with the finest
          ingredients.
        </p>

        {/* Sample Menu Section */}
        <div className="mt-10 bg-red-500 text-white p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold">Menu Section</h3>
        </div>
      </section>
    </>
  );
};

export default Menu;
