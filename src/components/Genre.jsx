import React from "react";
import { Link } from "react-router-dom";

function Genre() {
  return (
    <div className="mb-10">
      <div className="genre-box">
        <div className="title mt-8 text-right mb-8">
          <h1 className="text-6xl mr-2 lg:mr-10 pb-3 md:text-6xl">
            want something specific?
          </h1>
          <hr />
        </div>
        <div className="genre-list mt-10 mb-10 mr-2 ml-2 lg:ml-10 lg:mr-10">
          <Link
            className="gen rounded-md shadow-sm lg:w-[30%]"
            to={`/category/general`}
          >
            <div className="">General</div>
          </Link>
          <Link
            className="gen rounded-md shadow-sm lg:w-[30%]"
            to={`/category/technology`}
          >
            <div className="">Technology</div>
          </Link>
          <Link
            className="gen rounded-md shadow-sm lg:w-[30%]"
            to={`/category/sports`}
          >
            <div className="">Sports</div>
          </Link>
          <Link
            className="gen rounded-md shadow-sm lg:w-[30%]"
            to={`/category/business`}
          >
            <div className="">Business</div>
          </Link>
          <Link
            className="gen rounded-md shadow-sm lg:w-[30%]"
            to={`/category/entertainment`}
          >
            <div className="">Entertainment</div>
          </Link>
          <Link
            className="gen rounded-md shadow-sm lg:w-[30%]"
            to={`/category/health`}
          >
            <div className="">Health</div>
          </Link>
        </div>
      </div>
      <hr />
    </div>
  );
}

export default Genre;
