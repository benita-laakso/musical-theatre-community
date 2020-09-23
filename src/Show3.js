import React from 'react';
import './App.css';
import './Show.css';
import cottage from './images/cottage.jpg';
function Show3(){
   return(
       <div>
      
       
   <h3>Cottage county</h3>
   
   <div className="show-item"><div className="show-description">
   
  
    <p>Cottage County. Is a story about the community spirit in Mistic grove Island. In 1845 the town experiences grate tragedy as the catastrophe occurred 24 and over half of the village was killed. Children where left with out parents an couples lost their spouses. Great sorrow came a over the village. 
    Thanks to Martha Harris an elderly woman with no family supported an coordinated living for those who had become homeless over night, she cooked meals for 200 people a day for three months.
    </p>
    
    
    
    <h4>“Our country is starving, we need to feed them" </h4>
    <p>
    
   

    Legend has it that Martha Harris walked into the house of parliament and said “ Our country is starving, we need to feed them,
     find me the biggest kitchen you can and I will make dinners at noon mon-saturday on Sunday I will rest.” She then coordinated food supplying from farmers from around the country. 
    She lifted the spirits of the citizens as she supplied them with the food and shelter that they needed in thees trying times.  Now her grate great great grand daughter has made this historic event into a Play to honer the women know today as “Mother of the Town” as she was there for hundreds of people in need.
    
    This is our yearly Musical for 2021. As always the it is a world premier.</p></div>

    <div className="item item-intro show-img">
         
    <img className="gallery-pik" src={cottage} alt="" ></img>
       
   </div></div>

   </div>);
}
export default Show3;


