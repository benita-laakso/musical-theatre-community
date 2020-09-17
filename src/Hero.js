import React from 'react';
import './App.css';
import performances from './images/tim-gouw-tYpp-eIZH44-unsplash.jpg';


function Hero(){
    return(
        <div className="hero">
        <img className="musical-theatre-img"src={performances} alt="musical theatre picature" />
        <div className="text-cont">
        <h1 className="heading-intro hero-text">CosmoChimica</h1>
        <p className="intro-p hero-text ">
        Music, Acting & Dance</p>
        <div className=" hero-content-area">
       <p className="intro-p small hero-text"><i>"Preforming arts at its best."
       {/*
       <br></br>Some of our worlds finest actors, singers and dancers preform atCosmochimica.*/}</i></p>
        <p className="intro-p mini hero-text">Anna-Bell Haistings New York Times</p>
        
        </div></div>
      </div>
    );
}
export default Hero;