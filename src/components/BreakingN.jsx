import React from "react";
import wnImage from "../assets/wnSectionMobile.png";

function BreakingN({ articles }) {
  return (
    <div>
      <div className="container mb-5 lg:pr-3 mt-5">
        <img src={articles.urlToImage || wnImage} alt="" />
        <div className="ml-2 mr-2">
          <h3 className="font-semibold pt-2 pb-2 text-3xl">Breaking News</h3>
          <p className="font-normal">{articles.description}</p>
        </div>
      </div>
    </div>
  );
}

export default BreakingN;
