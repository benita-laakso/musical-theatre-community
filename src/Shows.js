import React from 'react';
import './App.css';
import cottage from './images/cottage.jpg';

import acro from './images/alice-naar-c_c5hd-9iwY-unsplash.jpg';
import castle_2 from './images/artem-sapegin-XGDBdSQ70O0-unsplash.jpg'; 
import performances from './images/tim-gouw-tYpp-eIZH44-unsplash.jpg';

function Shows(){
    return(


        <section>
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
           
              <img className="gallery-pik" src={acro} alt="" ></img>
           </div>
           <div className="item item-2">
           <h3>Mystic Paradice 2021</h3>
           <p className="img-heading">
    
           A newly written large scale musical for the whole family. The mellodies and lyrics are mesmorising as world famouse Andrew With has composed from his haart taulouring the pices to the skills of the singers he has hand selected from around the globe. This years star is Australias star Whitney Andrews.
           "A true performance spectical including air acrobatics" Josefine Hariss Times Magasine
           </p>
           <img className="gallery-pik" src={castle_2} alt="" ></img>
        </div>
    
         <div className="item item-3">
        <h3>Cottage county 2021</h3>
        
        <p className="img-heading">Cottage County. Is a story about the community spirit in Mistic grove Island. In 1845 the town experiences grate tragedy as the catastrophe occurred 24 and over half of the village was killed. Children where left with out parents an couples lost their spouses. Great sorrow came a over the village. Thanks to Martha Harris an elderly woman with no family supported an coordinated living for those who had become homeless over night, she cooked meals for 200 people a day for three months. Legend has it that she walked into the house of parliament and said “ Our country is starving, we need to feed them, find me the biggest kitchen you can and I will make dinners at noon mon-saturday on Sunday I will rest.” She then coordinated food supplying from farmers from around the country. She lifted the spirits of the citizens as she supplied them with the food and shelter that they needed in thees trying times.  Now her grate great great grand daughter has made this historic event into a Play to honer the women know today as “Mother of the Town” as she was there for hundreds of people in need.
    
        This is our yearly Musical for 2021. As always the it is a world premier.  
        </p>
           
           <img className="gallery-pik" src={cottage} alt="" ></img>
           </div>
           <div className="item item-4">
           <h3>Northern Flow 2021</h3>
           <p className="img-heading">The Performers for this production are based in Ireland, Scotlland, Sweeden and Finland. The theatres are rehearsing individually and will be touring 
           theeese countries in summer 2021, ending their tour in or home bace in New York September 2021.
           </p>
           <img className="gallery-pik" src={performances} alt="" ></img>
        </div>
        </div>
        </section>
    );
}
export default Shows;