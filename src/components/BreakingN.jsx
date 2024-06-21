import React from "react";
import wnImage from "../assets/wnSectionMobile.png";
import { Link } from "react-router-dom";

function BreakingN({ article }) {
  const loadingText = "Loading.....";
  return (
    <div className="ml-5 mr-5">
      <Link reloadDocument to={`/article/${article._id}`}>
        <div className="container rounded-md shadow-md overflow-hidden mb-5 lg:mr-3 mt-5">
          <img className="" src={article.urlToImage || wnImage} alt="" />
          <div className="ml-2 mr-2">
            <h3 className="font-semibold pt-2 pb-1 text-2xl">Breaking News</h3>
            <p className="font-semibold text-xl pb-1">
              {article.title || loadingText}
            </p>
            <p className="font-light pb-5">{article.description}</p>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default BreakingN;
