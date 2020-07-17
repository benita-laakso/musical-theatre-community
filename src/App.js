import React from 'react';
import './App.css';
import jag from './images/ensamble.jpg';

function App() {
  return (
    <div className="App">
    <div className="hero">

    <div className ="background-image "></div>
    <div>
    <img src={jag} alt="logo" />
    </div>
    </div>
     
      <div className ="center">
<div className ="side">
<h1>Shows</h1>
<a href="/"className="other-link"><h2>Musical</h2></a>
<a href="/"className="other-link"><h2>Conserts</h2></a>
<a href="/"className="other-link"><h2>Circus</h2></a>
</div>
    
  
       
      
      
      <div>
      <div className="main">
      <h1>Musical theatre Community</h1>
     
      <p><i>Welcome to begin your artistic journey I hope it will last for ever</i></p>
      <p>
      In the heart of Helsinki right by the Töölö bay , you will find an enchanting theatre community. The people who live there come from around the globe, sharing their passion for music, theatre and dance.
    </p>
      <h1>About</h1>
      <p>Welcome to begin your artistic journey I hope it will last for ever</p>
      <p> The group collaborates on full blown musicals and large ensemble performances. The artist also perform in smaller constellations of 1-6 performers. The group tours around the word in different constellation always returning to the home base for rehearsals of the yearly Musical. The yearly musical is a unique event as the performers com from across the globe to perform.  When ever one of the artist travels abroad to perform there is space available for any performing artist from around the globe to apply. The performer simply submits their application telling the group what their main profession is dancer, singer, actress, circus artist or multi performer like the funder of Musical Theatre Community is.  All dancers, singers, actors and other performing artist are always welcome to submit their application to participate in one of the upcoming shows or to live in the community whilst they preform or tour in the greater area of Helsinki. Please understand that this is the home of many Performing artists and this is why we do very personal interviews and auditions. We are looking for people who are like minded and passionate about the Performing arts. Even though we have large audiences and do tours world wide octane heart of the community is passion for the arts and a sense of togetherness. We welcome people of all ages and backgrounds, how ever we only consider people who are passionate about our unique concept and able to commit 100% during their stay with us.   </p>
      
      
    <a className="other-link"
    href="https://benitalaakso.com"
    target="_blank"
    rel="noopener noreferrer"> I want to audition for a project </a>
    
    <div >
    <div className="top-space"></div>
    <a className="other-link"
    href="https://benitalaakso.com"
    target="_blank"
    rel="noopener noreferrer"> I want to audition for a project </a>
    
    </div>
    </div>
  
    
  
      </div>


    </div>
    <footer>
    <div className = "contacts">
    <h3>Musical theatre Comunity</h3>
    <p>musical-theatre-comunity@contact.com</p>
    <p>
    Sandbeachroad 52 A Tölö</p>
    <p> 00222 Helsinki Finland</p></div>
    </footer>

    </div>
  );
}

export default App;
