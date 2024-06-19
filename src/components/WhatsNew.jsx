import React from "react";
import BreakingN from "./BreakingN";
// import Feeds from "./Feeds";
import Articles from "./Articles";

function WhatsNew() {
  return (
    <div className="whatNewSection mt-8 mb-5 pt-5 pb-3">
      <hr />
      <div className="title mt-8 text-right mb-8">
        <h1 className="text-6xl mr-2 lg:mr-10 pb-3 md:text-6xl">
          what's brewing around you.
        </h1>
        <hr />
      </div>
      <div className="feedBox flex-col lg:flex-row lg:mr-10 lg:ml-10">
        <BreakingN />
        <hr className="lg:hidden" />
        <Articles />
      </div>
      <hr />
    </div>
  );
}

export default WhatsNew;
