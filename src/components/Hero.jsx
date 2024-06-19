import React from "react";
import Cards from "./Cards";
import "./style.css";

function Hero() {
  return (
    <div className="hero mt-5">
      <div className="title text-right mb-5">
        <h1 className="text-6xl mr-4 pb-3 md:text-8xl">JOURNAL</h1>
        <hr />
      </div>
      <Cards />
    </div>
  );
}

export default Hero;
