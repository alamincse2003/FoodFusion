import React from "react";
import Banner from "./Banner/Banner";
import Category from "./Category/Category";
import PopularMenu from "../../Shared/PopularMenu/PopularMenu";

const Home = () => {
  return (
    <>
      <Banner />
      <Category />
      <PopularMenu />
    </>
  );
};

export default Home;
