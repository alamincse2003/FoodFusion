import React from "react";
import { Helmet } from "react-helmet-async";
import Cover from "../../Shared/Cover/Cover";
import menuImg from "../../../assets/menu/banner3.jpg";
import dessertImg from "../../../assets/menu/dessert-bg.jpeg";
import pizzaImg from "../../../assets/menu/pizza-bg.jpg";
import saladImg from "../../../assets/menu/salad-bg.jpg";
import soupImg from "../../../assets/menu/soup-bg.jpg";
import useMenu from "../../../hooks/useMenu";
import SectionTitle from "../../../components/SectionTitle";
import MenuCategory from "../MenuCategory/MenuCategory";
const Menu = () => {
  const [menu] = useMenu();
  const salads = menu.filter((item) => item.category === "salad");
  const drinks = menu.filter((item) => item.category === "drinks");
  const offereds = menu.filter((item) => item.category === "offered");
  const desserts = menu.filter((item) => item.category === "dessert");
  const soups = menu.filter((item) => item.category === "soup");
  const pizzas = menu.filter((item) => item.category === "pizza");

  return (
    <>
      <Helmet>
        <title>FoodFusion | Our Menu</title>
      </Helmet>
      <Cover img={menuImg} title="Our Menu" />
      <SectionTitle
        heading="Today Offer"
        subHeading="Don't Miss"
      ></SectionTitle>
      <MenuCategory items={offereds}></MenuCategory>
      <MenuCategory
        items={desserts}
        title={"Desserts"}
        img={dessertImg}
      ></MenuCategory>
      <MenuCategory
        items={pizzas}
        title={"Pizzas"}
        img={pizzaImg}
      ></MenuCategory>
      <MenuCategory
        items={salads}
        title={"Salad"}
        img={saladImg}
      ></MenuCategory>
      <MenuCategory
        items={soups}
        title={"Soups"}
        img={soupImg}
      ></MenuCategory>
      
    </>
  );
};

export default Menu;
