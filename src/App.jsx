import React from "react";
import Navbar from "./components/Navbar";
import "./App.css";
import Hero from "./components/Hero";
import WhatsNew from "./components/WhatsNew";

function App() {
  return (
    <div className="rootBox">
      <Navbar />
      <Hero />
      <WhatsNew />
    </div>
  );
}

export default App;
