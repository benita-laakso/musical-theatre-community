import React from "react";
import "../App/App.css";


import data from "../showData.js"

import { Link } from "react-router-dom";

function ShowsGallery() {
  return (
    <section>
      <div className="shows-heading">
        <h2 className="no-margin">Shows</h2>
      </div>
      <div className="gallery">

        {data.map((el, index) => {
          return (
            <Link key={index} to={el.link}>
              <div>
                <h3>{el.previewHeading}</h3>
                <img className="picature" src={el.image} alt=""></img>
              </div>
            </Link>
          )
        })}
      </div>
    </section>
  );
}
export default ShowsGallery;
