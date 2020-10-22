import React from "react";
import "../App/App.css";
import Navbar from "../Navbar/Navbar.js";
import "../Hero/Hero.css";
import "./Hero2.css";


function Hero2() {
  return (
    <div className="hero hero2">
      <Navbar />
      <div className="text-cont">
        <h1 className="hero-h1 hero2-h1">CosmoChimica</h1>
        <h2 className="hero-h2 hero2-h2">Music, Acting & Dance</h2>
      
      </div>
    </div>
  );
}
export default Hero2;
