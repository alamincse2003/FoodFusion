import React from "react";
import MenuItem from "../../Home/Home/MenuItem/MenuItem";
import Cover from "../../Shared/Cover/Cover";

const MenuCategory = ({ items, title, img }) => {
  return (
    <section className="mb-12 px-4 md:px-8 lg:px-16">
      {title && <Cover img={img} title={title} />}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 mt-10">
        {items?.map((item) => (
          <MenuItem key={item._id} item={item}></MenuItem>
        ))}
      </div>
    </section>
  );
};

export default MenuCategory;
