import React from "react";
import Navbar from "../../Components/Navbar";
import Banner from "./Banner";
import "./HomeCSS/Custom.css";

const Home = () => {
  return (
    <div className="bg lg:px-28">
      <Navbar />
      <Banner />
    </div>
  );
};

export default Home;
