import React from 'react';
import './App.css';
import './Show.css';
 
import performances from './images/tim-gouw-tYpp-eIZH44-unsplash.jpg';
function Show4(){
   return(
       <div>
      
       
   <h3>Northern Rythem</h3>
   
   <div className="show-item"><div className="show-description">
   
  
    <p>Playwright Harry Austin has spent 2 years travelling in Northern Eorope. He has gotten to know the lokas
    and resershed the the roots of the different countries. Harry has visited folk dance communities as well as folk song communities in Ireland, Scotlland, Istland Sweeden and Finland.
    Based on his reserch he has writen a play incorperting the different songs and dances.
    Adriana Sigridsdotir has then traveled to theese countries for rehersals with the lokal theatres, practisng fragments of the show.
    </p>
    
    
    
    <h4>International colaboration </h4>
    <p>
    
   
    The Performers for this production are based in Ireland, Scotlland, Istland Sweeden and Finland. The theatres are rehearsing individually and will be touring 
    theeese countries in summer 2021, ending their tour in or home bace in New York September 2021.
   </p></div>

    <div className="item item-intro show-img">
    <img className="gallery-pik" src={performances} alt="" ></img>
       
       
   </div></div>

   </div>);
}
export default Show4;


