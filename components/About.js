import React from "react";
import AboutCard from "./AboutCard";

function About({ title, data }) {
  return (
    <div className="about lg:flex lg:justify-around lg:items-center lg:px-10">
      <h2 className="title text-center lg:min-w-max"> {title}</h2>

      <div className="about__Cards flex flex-wrap lg:justify-around lg:items-baseline lg:w-[100%]">
        {data.map((option) => (
          <AboutCard data={option} />
        ))}
      </div>
    </div>
  );
}

export default About;
