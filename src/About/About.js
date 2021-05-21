import React from "react";
import "../App/App.css";
import valentina from "../images/adriano-goncalves-IeHLttCrsXE-unsplash.jpg";

function About() {
  return (
    <div className="intro-grid">
      <div>
        <h2 className="no-margin">
          Musical Theatre Company
        </h2>
        <p>
          CosmoChimica is an international Musical Theatre Company.
          The group collaborates on a full blown newly written musical every
          year, as well as other ensemble performances. Cosmochimica tours around
          the word in different constellation always returning to the home base
          in New York for rehearsals of the yearly Musical. The yearly musical
          is a unique event as it always is a world premier. The performers at
          Cosmochimica come from around the globe, sharing their passion
          for music, theatre and dance.</p>
          <p> Valentina Garcia runs the theater,
          she has hade numerouse roles  since the theatre oapend in 2001. She has functioned as singer, actress, composer, dances and choreographer. {" "}
        </p>
        <div className="valentina ">
          <p>
            <b>Valentina Garcia</b>
          </p>
          <p>
            Valentina Garcia is a Clasical Singer from South of Itally. She is a
            mezzo sopprano with a very expreisve voice and preformance presnce.
            Becouse she has a posseses scale of skillsets she desided to start
            her own theatre, where she has all the creative freedom that she ahas
            been longing for after 17 years as a classically trained Opera
            Singer.
          </p>

          <p>
            <b>Singer & Actress:</b> 2001 - present
          </p>
          <p>
            <b> Composer:</b> 2005, 2008, 2009, 2010, 2018, 2019<br></br>
            <b>Dancer:</b> 2005 - present <br></br>
            <b>Choreographer:</b> 2007, 2010, 2015, 2017
          </p>

         <blockquote>
           "Valentina is very down to earth and easy to work with"
           </blockquote>
            <div className="qoute-sorce">Madeline Lead dancer </div>
            
      
        </div>
      </div>
      <div className="intro-img">
        <img
          className="picature brighter"
          src={valentina}
          alt="opera singer"
        ></img>
      </div>
    </div>
  );
}
export default About;
