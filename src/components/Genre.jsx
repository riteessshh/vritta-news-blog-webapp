import React from "react";

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
          <div className="gen lg:w-[30%]">Politics</div>
          <div className="gen lg:w-[30%]">Technology</div>
          <div className="gen lg:w-[30%]">Sports</div>
          <div className="gen lg:w-[30%]">Business</div>
          <div className="gen lg:w-[30%]">Regional</div>
          <div className="gen lg:w-[30%]">Global</div>
        </div>
      </div>
      <hr />
    </div>
  );
}

export default Genre;
