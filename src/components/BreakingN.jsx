import React from "react";
import wnImage from "../assets/wnSectionMobile.png";
import { Link } from "react-router-dom";

function BreakingN({ article }) {
  const loadingText = "Loading.....";
  return (
    <div className="ml-5 lg:ml-0 mr-5">
      <h1 className="text-3xl lg:ml-0 font-medium md:text-4xl">
        Trending News
      </h1>
      <Link to={`/article/${article._id}`}>
        <div className="container rounded-md lg:max-w-[640px] lg:min-w-80 shadow-md hover:shadow-lg overflow-hidden mb-5 lg:mr-3 mt-3">
          <img
            className="h-[360px] w-full"
            src={article.urlToImage || wnImage}
            alt=""
          />
          <div className="ml-2 mt-2 mr-2">
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
