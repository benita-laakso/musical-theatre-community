import React from 'react';
import Hero from './Hero.js';
import Footer from './Footer.js';
function Tikets() {
    return (<div>
       <Hero/><main>
       <h2>Tikets</h2>
       <div className="tiket-container">
     <div className="tikets-A" >
       <h3>Tranquility</h3>  
        <p><span className="price">15€ Regulare</span> 10€ Students</p>
       <h3>Mystic Paradice </h3>
    
       <p><span className="price">35€ Regulare</span> 20€ Students</p>
       </div>
       <div className="tikets-B" >
       <h3>Cottage county</h3>
    
       <p><span className="price">35€ Regulare</span> 20€ Students</p>
       <h3>Northern Rythem</h3>
    
       <p><span className="price">25€ Regulare</span> 15€ Students</p> 
       </div> 
       </div>
       </main>
   
      <Footer/>
       </div>)
    ;
    }
    export default Tikets;