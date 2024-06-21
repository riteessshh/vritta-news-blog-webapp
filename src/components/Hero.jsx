import React, { useEffect, useState } from "react";
import axios from "axios";
import Cards from "./Cards";
import img from "../assets/heroImg.png";
import "./style.css";
import GetDateTime from "./getDateTime";
import { Link } from "react-router-dom";

function Hero() {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(false); // Track loading state
  const [error, setError] = useState(null);

  function getRandomInt(min, max) {
    min = Math.ceil(min); // Ensure minimum is an integer
    max = Math.floor(max); // Ensure maximum is an integer
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  const randomInt = getRandomInt(1, 19); // Get a random integer between 5 (inclusive) and 10 (inclusive)

  const url = `https://vritta-news-blog-server.onrender.com/list/20`;
  // const url = "http://localhost:3000/list/20";

  async function getNews() {
    setIsLoading(true); // Set loading state to true
    setError(null); // Clear any previous errors
    try {
      const response = await axios.get(url);

      setArticles(response.data[randomInt]);
    } catch (error) {
      console.error("Error fetching news:", error);
      setError("Failed to load articles. Please try again later."); // User-friendly error message
    } finally {
      setIsLoading(false); // Set loading state to false after fetching or error
    }
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
      <Link to={`/article/${articles._id}`}>
        <div className="main-hero m-6 overflow-hidden shadow-md rounded-md lg:m-10 flex-col lg:flex-row">
          <div className="mainImage lg:w-[95%]">
            <img
              src={articles.urlToImage || img}
              className=""
              alt={articles.title}
            />
          </div>
          <div className="content pl-2 pb-2 lg:pl-5 lg:w-[100%]">
            {isLoading && <p>Loading article...</p>}
            {error && <p className="error">{error}</p>}
            <h1 className="text-2xl lg:text-3xl mt-4">{articles.title}</h1>
            <GetDateTime dateTimeString={articles.publishedAt} />
          </div>
        </div>
      </Link>
      <Cards />
    </div>
  );
}

export default Hero;
