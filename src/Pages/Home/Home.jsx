import React from "react";
import Navbar from "../../Components/Navbar";
import CovidBanner from "../CovidBanner/CovidBanner";
import FeaturedProduct from "../FeaturedProduct/FeaturedProduct";
import RecentProducts from "../RecentProduct/RecentProducts";
import Banner from "./Banner";

const Home = () => {
  return (
    <div className="bg lg:px-28">
      <Navbar />
      <Banner />
      <FeaturedProduct />
      <RecentProducts />
      <CovidBanner />
    </div>
  );
};

export default Home;
