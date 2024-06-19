import React from "react";
import img from "../assets/heroImg.png";

function Cards() {
  return (
    <div style={{ display: "block", overflow: "auto" }}>
      <div className="cards flex-row h-96 w-[1000px]">
        <div className="showcase w-full relative">
          <div className="heroImage brightness-50">
            <img className="h-96" src={img} alt="heroImg" />
          </div>
          <div className="heroText absolute bottom-5 left-2">
            <p className="font-medium text-3xl text-background">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, in
              aut.
            </p>
          </div>
        </div>
        <div className="showcase w-full relative">
          <div className="heroImage brightness-50">
            <img className="h-96" src={img} alt="heroImg" />
          </div>
          <div className="heroText absolute bottom-5 left-2">
            <p className="font-medium text-3xl text-background">
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
