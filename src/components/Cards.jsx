import React, { useState, useEffect } from "react";
import axios from "axios";
import img from "../assets/heroImg.png";

function Cards() {
  const [news, setNews] = useState([]);

  const url = "http://localhost:3000/articles/10";

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
      <h1 className="text-2xl ml-4 md:text-4xl">Latest News</h1>
      <div className="cards overflow-hidden hover:overflow-x-scroll">
        {news.map((item) => (
          <div key={item._id} className="showcase relative">
            <div className="heroImage w-[90vw] md:w-[60vw] lg:w-[40vw] brightness-50">
              <img
                className="card-image"
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
