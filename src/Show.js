import React from 'react';
import './App.css';
import './Show.css';
import acro from './images/alice-naar-c_c5hd-9iwY-unsplash.jpg';


function Show(){
   return(
       <div>
      
       
   <h3>Tranquility</h3>
   
   <div className="show-item"><div className="show-description">
   
  
    <p>Tranquility  is a  Oapen air dance and acrobatics show, folowed by a 15min meditative relaxation. Dancer Sophy Hastings is currently preforming Tranquility in Key west, Key Largo and Miami. She created the pice because she felt that the citizen in her home town in 
    Orlando Florida needed a moment of escape from the currant world situation.   </p>
    <p>  “Inner calm and trust in life is my biggest survival tool in any trying life surcomstances.  I wish to inspire and encourage others to to find this stat, this is why I created the pice tranquility”  New York times May 2020.      </p>
    <h4>Meditation to tranquil music</h4>
    
    <p>
   Sophy has composed meditative songs that she sings live acompanyed by 
    Musician Mathew Carrings creates an ambient atmosphere with hanging balls.
    
     The audience is envited to sit and meditate or to lay down on their youga mats and relax.
     </p></div>

    <div className="item item-intro show-img">
 <img className="gallery-pik" src={acro} alt="" ></img>
           

   </div></div>
  
   </div>);
}
export default Show;


