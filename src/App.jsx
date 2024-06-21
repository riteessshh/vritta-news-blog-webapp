import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Page from "./components/Page";
import "./App.css";

function App() {
  return (
    <Router basename="/vritta-news-blog-webapp">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/article/:articleId" element={<Page />} />
      </Routes>
    </Router>
  );
}

export default App;
