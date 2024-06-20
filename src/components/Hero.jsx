import React, { useEffect, useState } from "react";
import axios from "axios";
import Cards from "./Cards";
import img from "../assets/heroImg.png";
import "./style.css";

function Hero() {
  const [articles, setArticles] = useState([]);
  function getRandomInt(min, max) {
    min = Math.ceil(min); // Ensure minimum is an integer
    max = Math.floor(max); // Ensure maximum is an integer
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  const randomInt = getRandomInt(1, 19); // Get a random integer between 5 (inclusive) and 10 (inclusive)

  const url = `https://vritta-news-blog-server.onrender.com/articles/20`;
  // const url = "http://localhost:3000/articles/20";

  async function getNews() {
    const response = await axios.get(url);

    setArticles(response.data[randomInt]);
  }

  useEffect(() => {
    getNews();
  }, []);

  return (
    <div className="hero mt-5">
      <div className="title text-right mb-5">
        <h1 className="text-6xl mr-2 lg:mr-10 pb-3 md:text-8xl">JOURNAL</h1>
        <hr />
      </div>
      <div className="main-hero m-6 overflow-hidden shadow-md rounded-sm lg:m-10 flex-col lg:flex-row">
        <div className="mainImage lg:w-[95%]">
          <img
            src={articles.urlToImage || img}
            className=""
            alt={articles.title}
          />
        </div>
        <div className="content pl-2 pb-2 lg:pl-5 lg:w-[100%]">
          <h1 className="text-4xl mt-4">{articles.title}</h1>
        </div>
      </div>
      <Cards />
    </div>
  );
}

export default Hero;
