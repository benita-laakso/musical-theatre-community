import React from 'react';
import './App.css';

import Hero from './Hero.js';
import About from './About.js';
import ShowsGallery from './ShowsGallery.js';
import Footer from './Footer.js';


function Home() {
  return (
    <div >
<Hero/>
<main>
   <About/>
<ShowsGallery/>
    </main>
    <Footer/>
 </div>
 
  );
}

export default Home;
