import React from "react";
import Search from "./Search";

function Hero({ title, about, placeholder, icon }) {
  return (
    <div className="hero">
      <h1 className="hero__Title">{title}</h1>
      <p className="hero__About">{about}</p>
      <Search placeholder={placeholder} icon={icon} />
    </div>
  );
}

export default Hero;
