import React from "react";
import "../App/App.css";
import "./Show.css";

import performances from "../images/tim-gouw-tYpp-eIZH44-unsplash.jpg";

function Show4() {
  return (
    <div>
      <main>
        <h2 className="h2_custom">Northern Rythem</h2>

        <div className="show-item">
          <div className="show-description">
            <p className="start-p">
              {" "}
              Playwright Harry Austin has spent 2 years travelling in Northern
              Europe. He has gotten to know the locals and researched the the
              culture of the different countries. Harry has visited folk dance
              communities as well as folk song communities in Ireland, Scotland,
              Island, Sweden and Finland. Based on his research he has written a
              play incorporating the different songs and dances. Director
              Adriana Sigridsdottir has then traveled to thees countries for
              rehearsals with the local theatres, practising fragments of the
              show.{" "}
            </p>

            <h4>International colaboration </h4>
            <p>
              The Performers for this production are based in Ireland, Scotland,
              Island, Sweden and Finland. The theatres are rehearsing
              individually and will then come together to tour these countries
              in summer 2021, ending their tour in or home bace in New York
              September 2021.
            </p>
          </div>

          <div className="show-img">
            <img className="picature" src={performances} alt="dancing"></img>
          </div>
        </div>
      </main>
    </div>
  );
}
export default Show4;
