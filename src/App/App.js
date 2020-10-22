import React from "react";
import "./App.css";
import Hero2 from "../Hero2/Hero2.js";
import Hero from "../Hero/Hero.js";
import Home from "../Home/Home.js";
import Tickets from "../Tickets/Tickets.js";
import Footer from "../Footer/Footer.js";
import Artists from "../Artists/Artists.js";
import Show from "../Show/Show.js";
import ShowDescription from "../ShowDescription/ShowDescription.js";
import data from "../showData.js";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ScrollToTop from "../ScrollToTop/ScrollToTop.js";



function App() {
  return (
    <Router>
    <ScrollToTop/>
      <div className="App">
        {/* A <Switch> looks through its children <Route>s and
        renders the first one that matches the current URL. */}
        <Switch>
          

          <Route path="/tickets">
            <Hero2/>
            <Tickets />
            <div className="custom_hr"></div>
          </Route>
          
          
          <Route path="/artists">
            <Hero2 />
            <Artists />
          </Route>



          <Route path="/shows">
            <Hero2 />
            <ShowDescription />
          </Route>



          <Route path="/Tranquility">
            <Hero2 />
            <Show data={data[0]} />
          </Route>


          <Route path="/MysticParadise">
            <Hero2 /> 
            <Show data={data[1]} />
          </Route>


          <Route path="/CottageCounty">
            <Hero2 /> 
            <Show data={data[2]} />
          </Route>


          <Route path="/NorthernRythem">
            <Hero2 />
            <Show data={data[3]} />
          </Route>


          <Route path="/">
            <Hero/>
            <Home />
          </Route>
        
        
          </Switch>

          <Footer />

      </div>
      
    </Router>
  );
}





export default App;
