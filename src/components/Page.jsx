import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import img from "../assets/desktopHero.png";
import "./page.css";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import Footer from "./Footer";
import GetDateTime from "./getDateTime";

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
  }, [articleId]);

  return (
    <div>
      <Navbar />
      <div className="title text-right mt-5 mb-5">
        <h1 className="text-6xl mr-6 lg:mr-28 pb-3 md:text-8xl">ARTICLE</h1>
        <hr />
      </div>
      <div className="main-card rounded-md relative shadow-md mx-auto flex-col mr-6 ml-6 lg:ml-28 lg:mr-28 mb-10">
        <div className="title w-[95%] text-center md:text-left mb-3">
          <h1 className="text-2xl lg:text-4xl font-semibold">
            {article.title || "loading Article.... (please wait)"}
          </h1>
          <h4 className="mt-1">
            {article.author
              ? "by " + article.author
              : "author name here if there is any."}
          </h4>
          <GetDateTime dateTimeString={article.publishedAt} />
        </div>
        <div className="subtitle w-[80%] pb-3 text-center  font-light">
          <p>{article.description ? `"` + article.description + `"` : null}</p>
        </div>
        <div className="image h-52 mb-3 md:h-80 lg:w-[80%] lg:h-96">
          <img
            className="h-full w-full"
            src={article.urlToImage || img}
            alt={article.title}
          />
        </div>
        <div className="content mb-2 w-[95%]">
          <p>
            {formatData(article.content || "No content is available yet.")}...
          </p>
          <a className="hover:text-blue-300" href={article.url}>
            {article.url ? "Read full article from here!" : null}
          </a>
        </div>
        <div className="self-end m-4">
          <Link to={"/"}>
            <p className=" bg-[#153448] hover:shadow-lg w-28 text-white text-center pt-3 pb-3 rounded-md">
              Go Back
            </p>
          </Link>
        </div>
      </div>
      <hr className="mb-4" />
      <Footer />
    </div>
  );
}

export default Page;
