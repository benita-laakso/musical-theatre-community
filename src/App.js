import React from 'react';
import './App.css';
import Hero from './Hero.js';
import Home from './Home.js';
import Tikets from './Tikets.js';
import Footer from './Footer.js';

import {
   BrowserRouter as Router,
   Switch,
   Route,
   Link
 } from "react-router-dom";

function App() {
  return (
   <Router>
  <div className="App">
  
  <div className="main-nav">
    <nav>
      <ul>
        <li>
          <Link to="/">home</Link>
        </li>
        <li>
          <Link to="/tikets">tikets</Link>
        </li>
       
        </ul>
        <ul className="ul_2 ">
        <li>
        <Link to="/artists">artists</Link>
      </li>
      <li>
      <Link to="/apply">apply</Link>
    </li>
      </ul>
    </nav>
    </div>
    
    {/* A <Switch> looks through its children <Route>s and
        renders the first one that matches the current URL. */}
    <Switch>
    <Route path="/tikets">
        <Tikets/>
      </Route>
      <Route path="/artists">
        <Artists />
      </Route>
     
      <Route path="/apply">
      <Apply/>
    </Route>
      <Route path="/">
        <Home />
      </Route>
    </Switch>
   
  </div>
 
</Router>

  );
}


function Artists() {
return(<div><Hero/><main><h2>Artists</h2>
   <p>Content comming soon</p></main>
   <Footer/>
   </div>)

;
}


function Apply() {
   return(<div><Hero/><main><h2>Apply</h2>
      <p>Content comming soon</p></main>
      <Footer/>
      </div>)
  }


export default App;
