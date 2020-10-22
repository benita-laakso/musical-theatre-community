import React from "react";
import "../App/App.css";
import "./Hero.css";
import Navbar from "../Navbar/Navbar";



function Hero() {
  return (
    <div className="hero">
      <Navbar />
      <div className="text-cont ">
        <h1 className="hero-h1">CosmoChimica</h1>
        <h2 className="hero-h2">Music, Acting & Dance</h2>
        <blockquote className="hero-blockquote hero-content-area">
            <p>”Preforming arts at its best”</p>
            <span>Anna-Bell Haistings New York Times</span>
        </blockquote>
      </div>
    </div>
  );
}

export default Hero;