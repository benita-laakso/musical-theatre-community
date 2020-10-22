import React from "react";
import "../App/App.css";
import "./Artist.css";
import writer from "../images/grigore-ricky-vRkiYoCeN2g-unsplash.jpg";

function Artist3() {
  return (
    <div>
      <h2 className="h2_custom center">Cassandra Haris</h2>

      <div className="artist-container">
        <div className="artist-description">
          <p className="start-p">
            {" "}
            Playwright Cassandra Harris travels to different
            locations around the globe, capturing inspiration from different
            cultures and history. She spends four months at a given location,
            then returns to CosmoChimica to test the script with our actors and
            director. After this the writher spends half a year perfecting the
            play before handing it over to the the theatre.
          </p>
          <div className="mobile-center">
          <p>
            <b>Playwright:</b>
            <br></br> 2007 - present
          </p>

          <p>
            <b>Dancer:</b> <br></br>2014, 2019 <br></br>
          </p>
       
          <p>
            <b>Pianist & Composer:</b>
            <br></br> 2015, 2017
          </p>
          </div>
        </div>

        <div className="artist-img">
          <img className="picature brighter" src={writer} alt="picature of woman"></img>
        </div>
      </div>
      <div className="custom_hr"></div>
    </div>
  );
}
export default Artist3;
