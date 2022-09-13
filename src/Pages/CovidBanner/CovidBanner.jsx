import React from "react";
import injection from "../../Assets/images/COVID-19.png";

const CovidBanner = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 py-10">
      <div className="flex justify-center">
        <img className="w-1/2" src={injection} alt="" />
      </div>
      <div className="flex flex-col justify-center">
        <p>Exclusively Avalable on AppsPharma</p>
        <h2 className="text-blue-900 text-5xl font-bold">COVID-19 vaccine</h2>
        <p>
          Equitable access to safe and effective vaccines al to ending the
          COVID-19 pandemic.
        </p>
      </div>
    </div>
  );
};

export default CovidBanner;
