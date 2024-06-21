import React from "react";
import Navbar from "./Navbar";
import "../App.css";
import Hero from "./Hero";
import WhatsNew from "./WhatsNew";
import Genre from "./Genre";
import Footer from "./Footer";

function Home() {
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

export default Home;
