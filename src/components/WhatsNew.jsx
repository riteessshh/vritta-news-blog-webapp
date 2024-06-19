import React from "react";
import wnImage from "../assets/wnSectionMobile.png";

function WhatsNew() {
  return (
    <div className="whatNewSection mt-4 mb-5">
      <hr />
      <div className="title mt-2 text-right mb-5">
        <h1 className="text-6xl mr-4 pb-3 md:text-8xl">
          what's brewing around you.
        </h1>
        <hr />
      </div>
      <div className="container md:hidden">
        <img src={wnImage} alt="" />
        <div className="pl-2  pr-2 shadow-lg">
          <h3 className="font-semibold pt-1 pb-1 text-4xl">Breaking News</h3>
          <p className="font-thin">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis
            aperiam praesentium tenetur similique qui debitis veritatis ab amet
            cum sunt! Excepturi sed esse, impedit quos non aspernatur dolore
            unde delectus.
          </p>
        </div>
      </div>
    </div>
  );
}

export default WhatsNew;
