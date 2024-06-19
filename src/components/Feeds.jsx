import React from "react";
import wnImage from "../assets/wnSectionMobile.png";

function Feeds() {
  return (
    <div>
      <div className="feed">
        <h3 className="font-semibold mt-2 mb-2 pt-1 pb-1 text-4xl">Feeds</h3>
        <div className="">
          <img src={wnImage} alt="" />
          <p className="font-thin">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis
            aperiam praesentium tenetur similique qui debitis veritatis ab amet
            cum sunt!
          </p>
        </div>
      </div>
    </div>
  );
}

export default Feeds;
