import React from "react";
import Banner from "./Banner/Banner";
import Category from "./Category/Category";
import PopularMenu from "../../Shared/PopularMenu/PopularMenu";
import FoodFusion from "./FoodFusion/FoodFusion";
import FeaturedItems from "./FeaturedItems/FeaturedItems";
import Testimonial from "./Testimonial/Testimonial";

const Home = () => {
  return (
    <>
      <Banner />
      <Category />
      <FoodFusion />
      <PopularMenu />
      <FeaturedItems />
      <Testimonial />
    </>
  );
};

export default Home;
