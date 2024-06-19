import React from "react";
import img from "../assets/heroImg.png";

function Cards() {
  return (
    <div className="m-2 lg:m-9">
      <h1 className="text-2xl ml-4 md:text-4xl">Latest News</h1>
      <div className="cards">
        <div className="showcase relative">
          <div className="heroImage md:w-auto brightness-50">
            <img className="md:h-auto" src={img} alt="heroImg" />
          </div>
          <div className="heroText absolute bottom-5 left-2">
            <p className="font-medium text-3xl md:text-2xl text-background">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, in
              aut.
            </p>
          </div>
        </div>
        <div className="showcase relative">
          <div className="heroImage md:w-auto brightness-50">
            <img className="md:h-auto" src={img} alt="heroImg" />
          </div>
          <div className="heroText absolute bottom-5 left-2">
            <p className="font-medium text-3xl md:text-2xl text-background">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, in
              aut.
            </p>
          </div>
        </div>
        <div className="showcase relative">
          <div className="heroImage md:w-auto brightness-50">
            <img className="md:h-auto" src={img} alt="heroImg" />
          </div>
          <div className="heroText absolute bottom-5 left-2">
            <p className="font-medium text-3xl md:text-2xl text-background">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, in
              aut.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cards;
