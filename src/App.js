import React from 'react';
import './App.css';
import Nav from './Nav.js';
import Hero from './Hero.js';
import About from './About.js';
import Shows from './Shows.js';
import Footer from './Footer.js';

// import jag from './images/ensamble.jpg';
// import theatreAmbasader from './images/theater-ambasader.jpg';
// import dance from './images/dance.jpg';
// import consert from './images/consert.jpg';
// import composed from './images/composed.jpg';
// import circus from './images/circus.jpg';
// import shadow from './images/shadow-music.jpg';
// import sidney from './images/sidney.jpg';
// import grand from './images/grand.jpg';
// import danceStreet from './images/danceStreet.jpg';
// import italy from './images/italy.jpg';
// import cello from './images/cello.jpg';
// import bahamas from './images/Bahamas.jpg';
// import model from './images/model.jpg';
// import castle from './images/castle-istland.jpg';
// import trapeze from './images/shangyou-shi-U6mlid4nor8-unsplash.jpg';
// import sunflower from './images/blake-cheek-zwSMv0jY-1o-unsplash.jpg';
// import castle_3 from './images/colin-watts-3blV4-86aUo-unsplash.jpg';
// import dance_1 from './images/diego-rosa-Yyk4OmVJAyE-unsplash.jpg';  
// import dance_2 from './images/andrei-lasc-BcbSYcn9tJg-unsplash-cut.jpg';

function App() {
  return (
    <div className="App">
   <Nav/>
<Hero/>
<main>

   <About/>
<Shows/>

    </main>
    <Footer/> 
 </div>
  );
}

export default App;
