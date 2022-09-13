import React from "react";
import CovidBanner from "../CovidBanner/CovidBanner";
import FeaturedProduct from "../FeaturedProduct/FeaturedProduct";
import RecentProducts from "../RecentProduct/RecentProducts";
import Banner from "./Banner";

const Home = () => {
  return (
    <div>
      <Banner />
      <FeaturedProduct />
      <RecentProducts />
      <CovidBanner />
    </div>
  );
};

export default Home;
