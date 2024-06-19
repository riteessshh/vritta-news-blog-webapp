import React from "react";
import Navbar from "./components/Navbar";
import "./App.css";
import Hero from "./components/Hero";

function App() {
  return (
    <div className="rootBox">
      <Navbar />
      <Hero />
    </div>
  );
}

export default App;
