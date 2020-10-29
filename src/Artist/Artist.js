import React from "react";
import "../App/App.css";
import "./Artist.css";


function Artist(props) {
  const data = props.data
    return (
      <div>
        <h2 className="h2_custom center"> {data.artistHeading}</h2>
  
        <div className="artist-container">
          <div className="artist-description">
            <p className="about-artist">
            {data.about}
            </p>
            <div className="mobile-center">
          {data.qualifications.map((el, index)=>{
            if(el.type === "job" ){
              return <p key={index} className="no-margin-bottom bold">{el.text}</p>
            }else{
              return <p key={index} className="no-margin">{el.text}</p>
            }
          })}
            </div>
          </div>
  
          <div className="artist-img">
          <img
            className={data.className}
            src={data.image}
            alt={data.alt}
          ></img>
        </div>
        </div>
        <div className="custom_hr"></div>
      </div>
    );
  }

export default Artist;
