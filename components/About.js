import React from "react";
import AboutCard from "./AboutCard";

function About({ title, data }) {
  return (
    <div className="about">
      <h2 className="title text-center"> {title}</h2>

      <div className="about__Cards">
        {data.map((option) => (
          <AboutCard data={option} />
        ))}
      </div>
    </div>
  );
}

export default About;
