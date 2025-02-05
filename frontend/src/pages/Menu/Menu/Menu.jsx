import React from "react";
import { Helmet } from "react-helmet-async";
import Cover from "../../Shared/Cover/Cover";
import menuImg from "../../../assets/menu/banner3.jpg";
const Menu = () => {
  return (
    <>
      <Helmet>
        <title>FoodFusion | Our Menu</title>
      </Helmet>
      <Cover img={menuImg} />
    </>
  );
};

export default Menu;
