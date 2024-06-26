import React from "react";
import { Link } from "react-router-dom";

function Genre() {
  return (
    <div className="mb-10">
      <div className="genre-box">
        <div className="title mt-4 max-md:mt-1 text-right mb-8">
          <h1 className="text-5xl mr-4 lg:mr-28 pb-3 font-semibold md:text-6xl">
            something specific.
          </h1>
          <hr />
        </div>
        <div className="genre-list mt-10 mb-10 mr-2 ml-2 lg:ml-28 lg:mr-28">
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
            to={`/category/politics`}
          >
            <div className="">Politics</div>
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
