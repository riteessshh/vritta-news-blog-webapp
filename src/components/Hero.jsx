import React from "react";
import Cards from "./Cards";
import img from "../assets/heroImg.png";
import deskImg from "../assets/desktopHero.png";
import "./style.css";

function Hero() {
  return (
    <div className="hero mt-5">
      <div className="title text-right mb-5">
        <h1 className="text-6xl mr-2 lg:mr-10 pb-3 md:text-8xl">JOURNAL</h1>
        <hr />
      </div>
      <div className="main-hero m-2 lg:m-10 flex-col lg:flex-row">
        <div className="mainImage lg:w-[100%]">
          {/* <img src={deskImg} className="hidden lg:inline-block" alt="" /> */}
          <img src={img} className="" alt="" />
        </div>
        <div className="content lg:pl-5 lg:w-[100%]">
          <h1 className="text-4xl mt-4">Title</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste culpa
            deleniti, reprehenderit consequatur aspernatur animi minus nostrum
            voluptate saepe natus tempora laudantium aliquam labore, maiores
            aperiam illo molestias necessitatibus. Quos.
          </p>
        </div>
      </div>
      <Cards />
    </div>
  );
}

export default Hero;
