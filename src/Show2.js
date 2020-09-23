import React from 'react';
import './App.css';
import './Show.css';
import castle_2 from './images/artem-sapegin-XGDBdSQ70O0-unsplash.jpg'; 

function Show2(){
   return(
       <div>
      
       
   <h3>Mystic Paradice</h3>
   
   <div className="show-item"><div className="show-description">
   
  
    <p>A newly written large scale musical for the whole family. The mellodies and lyrics are mesmorising as world famouse Andrew With has composed from his haart taulouring the pices to the skills of the singers he has hand selected from around the globe. This years star is Australias star Whitney Andrews.
     </p>
    
    
    <p> "A true performance spectical including air acrobatics" Josefine Hariss Times Magasine
    </p>
    <h4>Nature and tranquil </h4>
    <p>
    
   
   This year you will find our stage transformed into a musticle space in nature. 
   World famous gardner Alexandrow Topanache has designed the set with live trees and plants.
   The biggest chalange for the setdesign is the massive body of water that is on stage through out the performance.
</p></div>

    <div className="item item-intro show-img">
         
 <img className="gallery-pik" src={castle_2} alt="" ></img>
       
   </div></div>

   </div>);
}
export default Show2;


