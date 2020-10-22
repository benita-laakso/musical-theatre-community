import React from "react";
import "../App/App.css";
import "./Show.css";

import acro from "../images/alice-naar-c_c5hd-9iwY-unsplash.jpg";

function Show() {
  return (
    <div>
      <main>
        <h2 className="h2_custom first_show">Tranquility</h2>

        <div className="show-item">
          <div className="show-description">
            <p className="start-p">
              {" "}
              Tranquility is an open air interactive performance.
              <br></br> 30min solo pice by Dancer Sophy Hastings, followed by a
              15min meditative relaxation.
            </p>
            <p>
              Sophy Hastings is currently preforming Tranquility in Key west,
              Key Largo and Miami. She created the pice because she felt that
              the citizen in her home Bahama Villa needed a moment of escape
              from the currant world situation.{" "}
            </p>

            <blockquote>
              {" "}
              “Inner calm and trust in life is my biggest survival tool in any
              trying life circumstances. This is a state that I have learned to
              arrive at during my visits in the Temples in India. I wish to
              inspire and encourage others to to find this state, this is why I
              created the pice Tranquility”{" "}
            </blockquote>
            <div className="qoute-sorce">New York times May 2020</div>

            <h4>Meditation to tranquil music</h4>

            <p>
              Sophy has composed meditative songs that she sings live
              accompanied by musician Mathew Carrings creating an ambient
              atmosphere with hang drums. The audience is invited to sit and
              meditate or to lay down on their yoga mats and relax.
            </p>
          </div>

          <div className="show-img">
            <img className="picature" src={acro} alt="yoga pose"></img>
          </div>
        </div>
      </main>{" "}
    </div>
  );
}
export default Show;
