import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Page from "./components/Page";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/article/:articleId" element={<Page />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
