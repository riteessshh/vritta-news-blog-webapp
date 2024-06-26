import React, { useEffect, useState } from "react";
import axios from "axios";
import Cards from "./Cards";
import img from "../assets/heroImg.png";
import "./style.css";
import GetDateTime from "./getDateTime";
import { Link } from "react-router-dom";

function Hero() {
  const [articles, setArticles] = useState([]);

  function getRandomInt(min, max) {
    min = Math.ceil(min); // Ensure minimum is an integer
    max = Math.floor(max); // Ensure maximum is an integer
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  const randomInt = getRandomInt(1, 39); // Get a random integer between 5 (inclusive) and 10 (inclusive)

  const url = `https://vritta-news-blog-server.onrender.com/category/general`;
  // const url = "http://localhost:3000/list/20";

  async function getNews() {
    try {
      const response = await axios.get(url);

      setArticles(response.data[randomInt]);
    } catch (error) {
      console.error("Error fetching news:", error);
    }
  }

  useEffect(() => {
    getNews();
  }, []);

  return (
    <div className="hero mt-5">
      <div className="title text-right mb-5">
        <h1 className="text-5xl mr-4 lg:mr-28 pb-3 md:text-8xl ">JOURNAL</h1>
        <hr />
      </div>
      <h1 className="text-3xl ml-6 lg:ml-28 font-medium md:text-4xl">
        Breaking News
      </h1>
      <Link to={`/article/${articles._id}`}>
        <div className="main-hero ml-6 mr-6 mt-3 mb-6 overflow-hidden shadow-md hover:shadow-lg rounded-md lg:ml-28 lg:mr-28 lg:mt-3 flex-col lg:flex-row">
          <div className="mainImage lg:w-[95%]">
            <img
              src={articles.urlToImage || img}
              className="hero-image lg:max-h-96 lg:w-full"
              alt={articles.title}
            />
          </div>
          <div className="content pl-2 pb-2 pr-2 lg:pl-5 lg:w-[100%]">
            <h1 className="text-2xl lg:text-3xl font-medium mt-4">
              {articles.title
                ? articles.title
                : "Please wait while we are getting the articles for you....!"}
            </h1>
            <p className="text-xl lg:text-sm mt-2 mb-2">
              {articles.description}
            </p>
            <GetDateTime dateTimeString={articles.publishedAt} />
          </div>
        </div>
      </Link>
      <Cards />
    </div>
  );
}

export default Hero;
