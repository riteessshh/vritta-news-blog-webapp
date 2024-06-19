import React from "react";
import wnImage from "../assets/wnSectionMobile.png";

function BreakingN() {
  return (
    <div>
      <div className="container mb-5 pr-3 mt-5">
        <img src={wnImage} alt="" />
        <div className="ml-2 mr-2">
          <h3 className="font-semibold pt-2 pb-2 text-3xl">Breaking News</h3>
          <p className="font-normal">
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

export default BreakingN;
