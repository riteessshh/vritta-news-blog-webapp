import React from "react";
import wnImage from "../assets/wnSectionMobile.png";

function BreakingN({ articles }) {
  return (
    <div className="ml-5 mr-5">
      <div className="container rounded-md shadow-md mb-5 lg:mr-3 mt-5">
        <img src={articles.urlToImage || wnImage} alt="" />
        <div className="ml-2 mr-2">
          <h3 className="font-semibold pt-2 pb-2 text-3xl">Breaking News</h3>
          <p className="font-normal pb-5">{articles.description}</p>
        </div>
      </div>
    </div>
  );
}

export default BreakingN;
