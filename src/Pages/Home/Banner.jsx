import React from "react";
import avatar from "../../Assets/images/body1.png";

const Banner = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 mt-40">
      <div className="flex flex-col justify-center mx-5">
        <h1 className="text-5xl text-blue-900 font-bold">
          What does it feel like to have COVID-19?
        </h1>
        <h2 className="text-3xl font-bold text-green-600">
          We spoke to one survivor about the short and long-term symptoms of
          COVID-19.
        </h2>
        <p>
          Soraya Bahgat spoke to Verified about how it felt to have the virus
          and remembered her grandmother, who sadly died from COVID-19. In the
          video, she asks us all to take care of our health and to help stop the
          spread of COVID-19 to save lives. There is now real hope that vaccines
          will help end the pandemic. But until it is over, we must stay
          vigilant and continue to protect our loved ones by wearing masks,
          physically distancing and washing our hands.
        </p>
        <button className="banner-btn">Explore Now</button>
      </div>
      <div className="flex justify-center items-center hidden lg:block">
        <img src={avatar} alt="" />
      </div>
    </div>
  );
};

export default Banner;
