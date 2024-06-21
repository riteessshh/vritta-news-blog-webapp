import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import img from "../assets/desktopHero.png";
import "./page.css";
import axios from "axios";
import { useParams } from "react-router-dom";
import WhatsNew from "./WhatsNew";
import Footer from "./Footer";

function Page() {
  const [article, setArticle] = useState([]);
  const [isLoading, setIsLoading] = useState(false); // Track loading state
  const [error, setError] = useState(null);

  const { articleId } = useParams();

  const url = `https://vritta-news-blog-server.onrender.com/article/${articleId}`;
  // const url = `http://localhost:3000/article/${articleId}`;

  async function getArticle() {
    setIsLoading(true); // Set loading state to true
    setError(null); // Clear any previous errors

    try {
      const response = await axios.get(url);
      setArticle(response.data);
    } catch (error) {
      console.error("Error fetching news:", error);
      setError("Failed to load articles. Please try again later."); // User-friendly error message
    } finally {
      setIsLoading(false); // Set loading state to false after fetching or error
    }
  }

  function formatData(rawData) {
    // Example raw data
    const rawText = rawData.replace(/\n/g, ""); // Remove newline characters for easier processing

    const content = rawText.split("… [+");
    const mainText = content[0];

    // Return the formatted HTML as a string
    return mainText;
  }

  useEffect(() => {
    getArticle();
  }, []);

  return (
    <div>
      <Navbar />
      <div className="title text-right mt-5 mb-5">
        <h1 className="text-6xl mr-2 lg:mr-10 pb-3 md:text-8xl">ARTICLE</h1>
        <hr />
      </div>
      <div className="main-card rounded-md shadow-md mx-auto flex-col w-[95%] md:w-[93%]">
        {isLoading && <p>Loading articles...</p>}
        {error && <p className="error">{error}</p>}
        <div className="title w-[95%] text-center md:text-left mb-3">
          <h1 className="text-2xl lg:text-4xl font-semibold">
            {article.title}
          </h1>
          <h4>By {article.author}</h4>
        </div>
        <div className="subtitle w-[80%] pb-3 text-center  font-light">
          <p>"{article.description}"</p>
        </div>
        <div className="image h-52 mb-3 md:h-80 lg:w-[80%] lg:h-96">
          <img
            className="h-full w-full"
            src={article.urlToImage || img}
            alt={article.title}
          />
        </div>
        <div className="content w-[95%]">
          <p>{formatData(article.content || "No content is available.")}...</p>
          <a className="hover:text-blue-300" href={article.url}>
            Read more from here!
          </a>
        </div>
      </div>
      <WhatsNew />
      <Footer />
    </div>
  );
}

export default Page;
