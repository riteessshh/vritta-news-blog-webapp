import React, { useState, useEffect } from "react";
import axios from "axios";
import img from "../assets/heroImg.png";
import { Link } from "react-router-dom";

function Cards() {
  const [news, setNews] = useState([]);

  const url = "https://vritta-news-blog-server.onrender.com/list/10";
  // const url = "http://localhost:3000/list/10";

  async function getNews() {
    const response = await axios.get(url);
    const arts = response.data;

    setNews(arts);
  }

  useEffect(() => {
    getNews();
  }, []);

  return (
    <div className="m-2 lg:ml-28 lg:mr-28">
      <h1 className="text-3xl ml-4 lg:ml-0 font-medium md:text-4xl">
        Today's Headlines
      </h1>
      <div className="cards mr-4 ml-4 lg:mr-0 lg:ml-0 rounded-md overflow-auto hover:overflow-x-scroll">
        {news.map((item) => (
          <Link className="mr-2" to={`/article/${item._id}`} key={item._id}>
            <div className="showcase mb-4 relative">
              <div className="heroImage shadow-md rounded-md w-[84vw] md:w-[60vw] lg:w-[30vw] brightness-50">
                <img
                  className="card-image rounded-md"
                  src={item.urlToImage || img}
                  alt={item.title}
                />
              </div>
              <div className="heroText absolute bottom-5 left-2">
                <p className="font-medium text-xl md:text2xl text-background">
                  {item.title}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Cards;
