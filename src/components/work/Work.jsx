import React from "react";
import "./work.css";
import Works from "./Works";

const Work = () => {
  return (
    <section className="work section" id="portfolio">
      <p className="work__eyebrow">A few things I have made</p>
      <h2 className="section__title">Selected work</h2>
      <span className="section__subtitle">
        Recent projects across web, apps, and visual design.
      </span>

      <Works />
    </section>
  );
};

export default Work;
