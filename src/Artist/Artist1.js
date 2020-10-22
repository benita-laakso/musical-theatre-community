import React from "react";
import "../App/App.css";
import "./Artist.css";

import valentina from "../images/adriano-goncalves-IeHLttCrsXE-unsplash.jpg";

function Artist1() {
  return (
    <div>
      <h2 className="h2_custom center"> Valentina Garcia </h2>

      <div className="artist-container">
        <div className="artist-description">
          <p className="start-p">
            {" "}
            Valentina Garcia is a classical Singer from South of Italy. She is a
            mezzo soprano with a very expressive voice and performance presence.
            Because she has many talents and skills she decided to start her own
            theatre, where she has had numerous roles; actress, singer, composer
            and choreographer.{" "}
          </p>
          <div className="mobile-center">
            <p>
              <b>Singer & Actress:</b>
              <br></br> 2001 - present
            </p>

            <p>
              <b>Dancer:</b> <br></br>2005 - present <br></br>
            </p>
            <p>
              <b> Composer:</b>
              <br></br> 2005, 2008, 2009,2018, 2019
            </p>
            <p>
              <b>Choreographer:</b>
              <br></br> 2007, 2010, 2015, 2017
            </p>
          </div>
        </div>

        <div className="artist-img">
          <img
            className="picature brighter"
            src={valentina}
            alt="opera singer"
          ></img>
        </div>
      </div>
      <div className="custom_hr"></div>
    </div>
  );
}
export default Artist1;
