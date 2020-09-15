import React from 'react';
import './App.css';

import Hero from './Hero.js';
import About from './About.js';
import Shows from './Shows.js';
import Footer from './Footer.js';


function Home() {
  return (
    <div >
<Hero/>
<main>
   <About/>
<Shows/>
    </main>
    <Footer/>
 </div>
 
  );
}

export default Home;
