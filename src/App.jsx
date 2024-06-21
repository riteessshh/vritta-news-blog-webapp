import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/home";
import "./App.css";
import Page from "./components/Page";

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
