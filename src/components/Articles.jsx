import React from "react";
import artImg from "../assets/articleImage.png";

function Articles() {
  return (
    <div className="mt-5 lg:mt-1 mb-5">
      <div className="articles m-3">
        <h3 className="text-3xl lg:text-4xl font-bold">Latest Articles</h3>
        <div className="list-arts flex-col">
          <div className="arts flex">
            <p className="">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde quis
              natus eius nisi
            </p>
            <img className="w-40" src={artImg} alt="articleImage" />
          </div>
          <div className="arts flex">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde quis
              natus eius nisi
            </p>
            <img className="w-40" src={artImg} alt="articleImage" />
          </div>
          <div className="arts flex">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde quis
              natus eius nisi
            </p>
            <img className="w-40" src={artImg} alt="articleImage" />
          </div>
          <div className="arts flex">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde quis
              natus eius nisi
            </p>
            <img className="w-40" src={artImg} alt="articleImage" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Articles;
