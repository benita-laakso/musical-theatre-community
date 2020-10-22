import React from 'react';
import './Tickets.css';

function Tickets() {
    return (
       <main>
       <h2 className="center">Show tickets</h2>
       <div className="ticket-container">
     <div className="tickets-A" >
       <h3>Tranquility</h3>  
        <p><span className="price">15€ Regulare</span> 10€ Students</p>
       <h3>Mystic Paradise </h3>
    
       <p><span className="price">35€ Regulare</span> 20€ Students</p>
       </div>
       <div className="tikets-B" >
       <h3>Cottage county</h3>
    
       <p><span className="price">35€ Regulare</span> 20€ Students</p>
       <h3>Northern Rythem</h3>
    
       <p><span className="price">25€ Regulare</span> 15€ Students</p> 
       </div> 
       </div>
       </main>);
    }
    export default Tickets;