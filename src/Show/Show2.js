import React from "react";
import "../App/App.css";
import "./Show.css";

import castle_2 from "../images/artem-sapegin-XGDBdSQ70O0-unsplash.jpg";


function Show2() {
  return (
    <div>
      {" "}
      <main>
        <h2 className="h2_custom">Mystic Paradise</h2>

        <div className="show-item">
          <div className="show-description">
            <p className="start-p">
              A newly written large scale musical for the whole family. World
              famous Andrew With has composed mesmerising melodies and lyrics
              for hand selected singer from around the globe. This years leading
              role will be played by Australias star Whitney Andrews.
            </p>

            <blockquote>
              {" "}
              "A true performance spectacle including air acrobatics"{" "}
            </blockquote>
            <div className="qoute-sorce">Josefine Hariss Times Magasine</div>

            <h4>Nature and tranquil </h4>
            <p>
              This year you will find our stage transformed into a mystical
              space in nature. World famous gardener Alexandro Gonzales has
              designed the set with live trees and plants. The biggest challenge
              for the set design is the massive body of water that is on stage
              through out the performance.
            </p>
          </div>

          <div className="show-img">
            <img
              className="picature"
              src={castle_2}
              alt="row boat with castle i the background"
            ></img>
          </div>
        </div>
      </main>{" "}
    </div>
  );
}
export default Show2;
