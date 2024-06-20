import React, { useState, useEffect } from "react";
import axios from "axios";
import BreakingN from "./BreakingN";
// import Feeds from "./Feeds";
import Articles from "./Articles";

function WhatsNew() {
  const [articles, setArticles] = useState([]);
  function getRandomInt(min, max) {
    min = Math.ceil(min); // Ensure minimum is an integer
    max = Math.floor(max); // Ensure maximum is an integer
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  const randomInt = getRandomInt(1, 19); // Get a random integer between 5 (inclusive) and 10 (inclusive)

  const url = `http://localhost:3000/articles/20`;

  async function getNews() {
    const response = await axios.get(url);
    setArticles(response.data[randomInt]);
  }

  useEffect(() => {
    getNews();
  }, []);
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
        <BreakingN articles={articles} />
        <hr className="lg:hidden" />
        <Articles />
      </div>
      <hr />
    </div>
  );
}

export default WhatsNew;
