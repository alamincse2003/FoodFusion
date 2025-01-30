import React from "react";
import Banner from "./Banner/Banner";
import Category from "./Category/Category";
import PopularMenu from "../../Shared/PopularMenu/PopularMenu";
import FoodFusion from "./FoodFusion/FoodFusion";
import FeaturedItems from "./FeaturedItems/FeaturedItems";
import Testimonial from "./Testimonial/Testimonial";
import { Helmet} from "react-helmet-async";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>FoodFusion | Home</title>
      </Helmet>
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
