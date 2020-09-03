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
import theresia from './images/adriano-goncalves-IeHLttCrsXE-unsplash.jpg';

function App() {
  return (
    <div className="App">
   <div className="main-nav  ">
     <nav>
    <ul><li>home</li>
    <li>shows</li>
    <li>artists</li>
    </ul>
     <ul className="ul_2 ">
    <li>tikets</li>
    <li>apply</li></ul>
    
    </nav>
    </div>
    
  
    <div className="hero">
      <img className="musical-theatre-img"src={performances} alt="musical theatre picature" />
      <div className="text-cont">
    
      <h1 className="heading-intro">CosmoChimica</h1>
      {/**/}
      <p className="intro-p ">Music, Acting & Dance</p>
      <div className=" hero-content-area">
     <p className="intro-p small"><i>" Cosmochimica is Preforming arts at it´s best.
     {/*
     <br></br>Some of our worlds finest actors, singers and dancers preform atCosmochimica.*/}"</i></p>
      <p className="intro-p mini">Anna-Bell Haistings New York Times</p>
      
      </div></div>
    </div>




    <div className="item intro-grid">  
    <div className="item intro_item">
  
    <h2 style={{margin:"0px"}}><b>
    Musical Theatre Company
          </b> </h2>
         
    <p>The group collaborates on a full blown newly written musical every year as well as other ensemble performances. Cosmochimica tours around the word in different constellation always returning to the home base in New York for rehearsals of the yearly Musical. The yearly musical is a unique event as it always is a world premier. The performers at Cosmochimica that come from around the globe, sharing their passion for music, theatre and dance. Valentina Garcia runs the theater and she has hade numerouse roles since the theatre oapend in 2001. </p>
     <div className ="valentina ">
    
    <p> <b>Valentina Garcia</b></p>
      <p>Valentina Garcia is a Clasical Singer from South of Itally. She is a mezzo sopprano with a very expreisve voice and preformance presnce. Becouse she has a posseses scale of skillsets she desided to start her own theatre, whre she has all the creative freedom that she ahas been longing for after 17 years as a classically trained Opera Singer.</p>
   
   <p>
   <b>Singer & Actress:</b> 2001 - present</p>
   <p>
  <b> Composer:</b> 2005, 2008, 2009, 2010, 2018, 2019<br></br> <b>Dancer:</b> 2005 - present <br></br><b>Choreographer:</b> 2007, 2010, 2015, 2017</p>
    {/*
       <img className="gallery-pik"src={theatreAmbasader}></img>
   */} 
   <p><i>"Valentina is very down to earth and easy to work with"</i> <br></br> Madeline Lead dancer</p></div>
   
   </div>
   <div className="item item-intro intro-img">
       <img className="gallery-pik brighter"src={theresia}></img>
    </div>
    </div>
    <div className="shows-heading">
    <h2>Shows</h2></div>
    <div className="gallery">
    
     
       <div className="item item-1">
<h3>Tranquility 2020-2021</h3>
<p className="img-heading">Tranquility

Oapen air dance and acropatics show.

Dancer Sophy Hastings is currently preforming Tranquility in Key west, Key Largo and Miami. 

She created the pice because she felt that the citizen in her home town in Orlando Florida needed a moment of escape from the currant world situation. 
“Inner calm and trust in life is my biggest survival tool in any trying life surcomstances. This is a state that I have learned to arrive at during my visits to the Temples in India. I wish to inspire and encourage others to to find this stat, this is why I created the pice tranquility”  New York times May 2020. Tranquility is an oapen air interactive performance. 30min solo pice by Sophy, afterwords you may join in as a 15min meditation to the tranquil music performed by musician Mathew Carrings on hanging balls with Sophy sining with her eyes closedtaping intop the meditation atpsphere. For thouse who prefer you can lay down on the beach and enjouy the relaxing sounds. </p>
       {/*<img className="gallery-pik"src={consert}></img>
       */}
          <img className="gallery-pik"src={acro}></img>
       </div>
       <div className="item item-2">
       <h3>Mystic Paradice 2021</h3>
       <p className="img-heading">

       A newly written large scale musical for the whole family. The mellodies and lyrics are mesmorising as world famouse Andrew With has composed from his haart taulouring the pices to the skills of the singers he has hand selected from around the globe. This years star is Australias star Whitney Andrews.
       "A true performance spectical including air acrobatics" Josefine Hariss Times Magasine
       </p>
       <img className="gallery-pik"src={castle_2}></img>
    </div>

    {/*Test*/} <div className="item item-3">
    <h3>Cottage county 2021</h3>
    
    <p className="img-heading">Cottage County. Is a story about the community spirit in Mistic grove Island. In 1845 the town experiences grate tragedy as the catastrophe occurred 24 and over half of the village was killed. Children where left with out parents an couples lost their spouses. Great sorrow came a over the village. Thanks to Martha Harris an elderly woman with no family supported an coordinated living for those who had become homeless over night, she cooked meals for 200 people a day for three months. Legend has it that she walked into the house of parliament and said “ Our country is starving, we need to feed them, find me the biggest kitchen you can and I will make dinners at noon mon-saturday on Sunday I will rest.” She then coordinated food supplying from farmers from around the country. She lifted the spirits of the citizens as she supplied them with the food and shelter that they needed in thees trying times.  Now her grate great great grand daughter has made this historic event into a Play to honer the women know today as “Mother of the Town” as she was there for hundreds of people in need.

    This is our yearly Musical for 2021. As always the it is a world premier.  
    </p>
       {/*<img className="gallery-pik"src={consert}></img>
       */}
       <img className="gallery-pik"src={cottage}></img>
       </div>
       <div className="item item-4">
       <h3>Northern Flow 2021</h3>
       <p className="img-heading">The Performers for this production are based in Ireland, Scotlland, Sweeden and Finland. The theatres are rehearsing individually and will be touring 
       theeese countries in summer 2021, ending their tour in or home bace in New York September 2021.
       </p>
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
          <h3 className="footer-name">CosmoChimica</h3>
          <p className="footer-p">
          <div><i>Performing arts Community</i></div>
          <br></br>
          <div>cosmochimica@contact.com</div>
         <div> Adress and   postcode New York</div> 
         <div>Phone number</div></p>
    </footer>
 </div>
  );
}

export default App;
