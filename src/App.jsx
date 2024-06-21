import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import Page from "./components/Page";

function App() {
  return (
    <div>
      <BrowserRouter basename="/vritta-news-blog-webapp">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/article/:articleId" element={<Page />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
