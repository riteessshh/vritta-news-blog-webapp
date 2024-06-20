import React, { useState, useEffect } from "react";
import axios from "axios";
import artImg from "../assets/articleImage.png"; // Assuming you have this fallback image

function Articles() {
  const [news, setNews] = useState([]);
  const [isLoading, setIsLoading] = useState(false); // Track loading state
  const [error, setError] = useState(null);

  function getRandomInt(min, max) {
    min = Math.ceil(min); // Ensure minimum is an integer
    max = Math.floor(max); // Ensure maximum is an integer
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  const randomInt = getRandomInt(1, 5);

  const category = ["business", "health", "sports", "entertainment", "general"];

  const url = `http://localhost:3000/category/${category[randomInt]}`;

  async function getNews() {
    setIsLoading(true); // Set loading state to true
    setError(null); // Clear any previous errors
    try {
      const response = await axios.get(url);
      setNews(response.data.slice(0, 4)); // Fetch the first 4 articles
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
    <div className="mt-5 lg:mt-1 mb-5">
      <div className="articles m-3">
        <h3 className="text-3xl lg:text-4xl font-bold">Latest Articles</h3>
        {isLoading && <p>Loading articles...</p>}
        {error && <p className="error">{error}</p>}
        <div className="list-arts flex-col">
          {news.map((item) => (
            <div key={item._id} className="arts justify-between flex">
              <p className="lg:w-[520px]">{item.title}</p>
              <img
                className="h-28 w-32"
                src={item.urlToImage || artImg} // Fallback image
                alt="articleImage"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Articles;
