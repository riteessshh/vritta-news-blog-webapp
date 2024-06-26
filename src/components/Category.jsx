import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import img from "../assets/articleImage.png";
import "./page.css";
import Footer from "./Footer";

function Category() {
  const { categoryName } = useParams();

  const [news, setNews] = useState([]);

  const url = `https://vritta-news-blog-server.onrender.com/category/${categoryName}`;
  //   const url = `http://localhost:3000/category/${categoryName}`;

  async function getNews() {
    const response = await axios.get(url);
    const arts = response.data;
    // console.log(arts);
    setNews(arts);
  }

  useEffect(() => {
    getNews();
  }, []);
  return (
    <div>
      <Navbar />
      <div className="title text-right mt-5 mb-5">
        <h1 className="text-6xl mr-2 lg:mr-28 pb-3 md:text-8xl">
          {categoryName}
        </h1>
        <hr />
      </div>
      <div className="art-list lg:mr-28 lg:ml-28 max-md:flex-col lg:flex-wrap lg:justify-evenly m-4">
        {news.map((item) => (
          <Link className="" to={`/article/${item._id}`} key={item._id}>
            <div className="showcase flex-row-reverse h-28 lg:flex-col lg:h-72 lg:m-3 lg:w-60 shadow-md rounded-md pl-2 lg:pl-0 overflow-hidden justify-between lg:justify-start mb-4 ">
              <div className="heroImage w-[30%] lg:w-auto lg:h-[55%]">
                <img
                  className="art-image w-full h-full rounded-sm"
                  src={item.urlToImage || img}
                  alt={item.title}
                />
              </div>
              <div className="heroText self-center w-[70%] lg:w-full lg:p-2">
                <p className="font-medium">{item.title}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
      <Footer />
    </div>
  );
}

export default Category;
