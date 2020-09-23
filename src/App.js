import React from "react";
import "./App.css";
import Hero from "./Hero.js";
import Home from "./Home.js";
import Tikets from "./Tikets.js";
import Footer from "./Footer.js";
import Show from "./Show.js";
import Show2 from "./Show2.js";
import Show3 from "./Show3.js";
import Show4 from "./Show4.js";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        {/* A <Switch> looks through its children <Route>s and
        renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/tikets">
            <Tikets />
          </Route>
          <Route path="/artists">
            <Artists />
          </Route>

          <Route path="/shows">
            <ShowDescription />
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
  return (
    <div>
      <Hero />
     <Show/>
      <Footer />
    </div>
  );
}

function ShowDescription() {
  return (
    <div>
    <Hero/>
    <main>
    <div className="shows-heading">
    <h2 className="shows">Shows</h2></div>
    <Show/>
        <Show2/>
        <Show3/>
        <Show4/>
        </main>
      <Footer />
    </div>
  );
}

export default App;
