import React from "react";
import Artist from "../Artist/Artist.js";
import data from "../ArtistData.js";

function Artists() {
    return (
        <main>
          {data.map( (el, i) => {
            return (<Artist key={i} data={el}/>)
          })}
        </main>
    );
  }
  export default Artists;
