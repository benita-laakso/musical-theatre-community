import React from "react";
import "../App/App.css";
import "./Artist.css";
import director from "../images/toni-hukkanen-GeWnWHgGXls-unsplash.jpg";

function Artist2() {
  return (
    <div>
      <h2 className="h2_custom center"> Peter Isakson </h2>

      <div className="artist-container">
        <div className="artist-description">
          <p className="start-p">
            {" "}
            Peter Isakson is CosmoChimicas director. He is the sun of actress
            Filippa Isacsson and composer Paulov Kotenski. 
            Peter started out as a child actor alongside his mother untill he 
            discover directing to be his true calling.
          </p>
          <div className="mobile-center">
          <p>
            <b>Director:</b>
            <br></br> 2007 - present
          </p>

          <p>
            <b> Playwright:</b>
            <br></br> 2009, 2018, 2020
          </p>

          <p>
            <b>Actor:</b> <br></br>1994 -1998<br></br>
          </p>
</div>
        </div>

        <div className="artist-img">
          <img className="picature brighter" src={director} alt="man looking casual"></img>
        </div>
      </div>
      <div className="custom_hr"></div>
    </div>
  );
}
export default Artist2;
