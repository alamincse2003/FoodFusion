import React from "react";
import MenuItem from "../../Home/Home/MenuItem/MenuItem";
import Cover from "../../Shared/Cover/Cover";
import { Link } from "react-router-dom";

const MenuCategory = ({ items, title, img }) => {
  return (
    <section className="mb-12 px-4 md:px-8 lg:px-16">
      {title && <Cover img={img} title={title} />}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 mt-10">
        {items?.map((item) => (
          <MenuItem key={item._id} item={item}></MenuItem>
        ))}
      </div>
      <div className="flex justify-center mt-6">
        <Link to={`/order/${title}`}>
          <button className="mt-4 uppercase border-b-4  border-yellow-500 text-yellow-500 px-6 py-2 rounded-lg transition-all duration-300 hover:bg-yellow-500 hover:text-black">
            Order Now
          </button>
        </Link>
      </div>
    </section>
  );
};

export default MenuCategory;
