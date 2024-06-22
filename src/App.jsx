import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import Page from "./components/Page";
import Category from "./components/Category";
import ScrollToTop from "./ScrollToTop";

function App() {
  return (
    <div>
      <BrowserRouter>
        <ScrollToTop>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/article/:articleId" element={<Page />} />
            <Route path="/category/:categoryName" element={<Category />} />
          </Routes>
        </ScrollToTop>
      </BrowserRouter>
    </div>
  );
}

export default App;
