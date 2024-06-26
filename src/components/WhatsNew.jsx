import React, { useState, useEffect } from "react";
import axios from "axios";
import BreakingN from "./BreakingN";
import Articles from "./Articles";

function WhatsNew() {
  const [article, setArticle] = useState([]);

  function getRandomInt(min, max) {
    min = Math.ceil(min); // Ensure minimum is an integer
    max = Math.floor(max); // Ensure maximum is an integer
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  const randomInt = getRandomInt(1, 19); // Get a random integer between 5 (inclusive) and 10 (inclusive)

  const url = `https://vritta-news-blog-server.onrender.com/list/20`;
  // const url = "http://localhost:3000/list/20";

  async function getNews() {
    try {
      const response = await axios.get(url);
      setArticle(response.data[randomInt]);
    } catch (error) {
      console.error("Error fetching news:", error);
    }
  }

  useEffect(() => {
    getNews();
  }, []);

  return (
    <div className="whatNewSection mt-8 mb-5 pt-5">
      <hr />
      <div className="title mt-4 text-right mb-8">
        <h1 className="text-5xl mr-4 lg:mr-28 pb-3 font-semibold md:text-6xl">
          what's brewing around you.
        </h1>
        <hr />
      </div>
      <div className="feedBox flex-col lg:flex-row lg:mr-28 lg:ml-28">
        <BreakingN article={article} />
        <hr className="lg:hidden" />
        <Articles />
      </div>
      <hr />
    </div>
  );
}

export default WhatsNew;
