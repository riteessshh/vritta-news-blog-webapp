import React, { useState, useEffect } from "react";
import axios from "axios";
import img from "../assets/heroImg.png";

function Cards() {
  const [news, setNews] = useState([]);

  const url = "https://vritta-news-blog-server.onrender.com/articles/10";
  // const url = "http://localhost:3000/articles/10";

  async function getNews() {
    const response = await axios.get(url);
    const arts = response.data;

    setNews(arts);
  }

  useEffect(() => {
    getNews();
  }, []);

  return (
    <div className="m-2 lg:m-9">
      <h1 className="text-3xl ml-4 md:text-4xl">Latest News</h1>
      <div className="cards overflow-auto hover:overflow-x-scroll">
        {news.map((item) => (
          <div key={item._id} className="showcase mb-4 relative">
            <div className="heroImage shadow-md rounded-sm w-[84vw] md:w-[60vw] lg:w-[30vw] brightness-50">
              <img
                className="card-image rounded-sm"
                src={item.urlToImage || img}
                alt={item.title}
              />
            </div>
            <div className="heroText absolute bottom-5 left-2">
              <p className="font-medium text-3xl md:text-2xl text-background">
                {item.title}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Cards;
