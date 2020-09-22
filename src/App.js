import React from "react";
import "./App.css";
import Hero from "./Hero.js";
import Home from "./Home.js";
import Tikets from "./Tikets.js";
import Footer from "./Footer.js";
import Show from "./Show.js";

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

          <Route path="/apply">
            <Apply />
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
      <main>
        <h2>Artists</h2>
        <p>Content comming soon</p>
      </main>
      <Footer />
    </div>
  );
}

function Apply() {
  return (
    <div>
      <main>
        <Show />
      </main>
      <Footer />
    </div>
  );
}

export default App;
