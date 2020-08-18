import React from 'react';
import './App.css';
import jag from './images/ensamble.jpg';
import theatreAmbasader from './images/theater-ambasader.jpg';
import dance from './images/dance.jpg';
import consert from './images/consert.jpg';
import composed from './images/composed.jpg';
import circus from './images/circus.jpg';
import shadow from './images/shadow-music.jpg';
import sidney from './images/sidney.jpg';
import grand from './images/grand.jpg';
import danceStreet from './images/danceStreet.jpg';
import italy from './images/italy.jpg';
import cello from './images/cello.jpg';
import bahamas from './images/Bahamas.jpg';
import model from './images/model.jpg';
import castle from './images/castle-istland.jpg';
import cottage from './images/cottage.jpg';

import trapeze from './images/shangyou-shi-U6mlid4nor8-unsplash.jpg';

import performances from './images/tim-gouw-tYpp-eIZH44-unsplash.jpg';

import acro from './images/alice-naar-c_c5hd-9iwY-unsplash.jpg';
import sunflower from './images/blake-cheek-zwSMv0jY-1o-unsplash.jpg';

import castle_2 from './images/artem-sapegin-XGDBdSQ70O0-unsplash.jpg'; 

import castle_3 from './images/colin-watts-3blV4-86aUo-unsplash.jpg';

import dance_1 from './images/diego-rosa-Yyk4OmVJAyE-unsplash.jpg';
import dance_2 from './images/andrei-lasc-BcbSYcn9tJg-unsplash-cut.jpg';


function App() {
  return (
    <div className="App">
    
    <div className="hero">
      <img className="musical-theatre-img"src={performances} alt="musical theatre picature" />
      <div className="text-cont">
    
      <h1 className="heading-intro">Cosmochimica</h1>
      {/**/}
      <p className="intro-p">Performing arts Community</p>
      </div>
    </div>
    <div className="item intro-grid">  
    <div className="item intro_item">
  
    <p><b>
    Cosmochimica is a group of multi talented Performing artis.
          

          </b> </p>
         
    <p>The group collaborates on a full blown newly written musical every year as well as other ensemble performances. Cosmochimica tours around the word in different constellation always returning to the home base for rehearsals of the yearly Musical. The yearly musical is a unique event as it always is a world premier. The performers at Cosmochimica that come from around the globe, sharing their passion for music, theatre and dance. </p>
      
   
    {/*
       <img className="gallery-pik"src={theatreAmbasader}></img>
   */} </div>
    <div className="item item-intro">
       <img className="gallery-pik"src={dance_2}></img>
    </div>
    </div>
    <div className="gallery">
    
     
       <div className="item item-1">

       {/*<img className="gallery-pik"src={consert}></img>
       */}
          <img className="gallery-pik"src={acro}></img>
       </div>
       <div className="item item-2">
       <img className="gallery-pik"src={castle_2}></img>
    </div>

    {/*Test*/} <div className="item item-3">

       {/*<img className="gallery-pik"src={consert}></img>
       */}
       <img className="gallery-pik"src={cottage}></img>
       </div>
       <div className="item item-4">
       <img className="gallery-pik"src={performances}></img>
    </div>
    
   
    </div>

    {/*
    <div className="background-image">
       <img className=".musical-theatre-img"src={sidney}>
       </img>
    </div>
*/}
   {/*<img className=".musical-theatre-img"src={jag} alt="musical theatre picature" />*/}
    <footer>
       <div className = "contacts">

          <h3>Cosmochimica</h3>
          <p>Performing arts Community</p>
          <p>cosmochimica@contact.com</p>
          <p>
          </p>
          <p> Adress and   postcode</p>
  <p>Phone number</p>
          </div>
    </footer>
 </div>
  );
}

export default App;
