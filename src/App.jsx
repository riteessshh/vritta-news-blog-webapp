import React from "react";
import Navbar from "./components/Navbar";
import "./App.css";
import Hero from "./components/Hero";
import WhatsNew from "./components/WhatsNew";
import Genre from "./components/Genre";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="rootBox">
      <Navbar />
      <Hero />
      <WhatsNew />
      <Genre />
      <Footer />
    </div>
  );
}

export default App;
