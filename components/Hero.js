import React from "react";
import Search from "./Search";

function Hero({ title, about, placeholder, icon }) {
  return (
    <div className="hero text-white">
      <div className="hero__Content px-4 pt-20">
        <h1 className="hero__Title mb-3.5 text-3xl text-center  lg:text-7xl lg:leading-[104px]">
          {title}
        </h1>
        <p className="hero__About mb-6 text-center opacity-80 lg:mb-11">
          {about}
        </p>
        <Search placeholder={placeholder} icon={icon} />
      </div>
    </div>
  );
}

export default Hero;
