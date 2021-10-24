import React from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "../Components/Navbar/Navbar";
import About from "../pages/About/About";
import Contact from "../pages/Contact/Contact";
import Portfolio from "../pages/Portfolio/Portfolio";

function App() {
  return (
    <div>
      <Router basename="/bcraig-react-portfolio">
        <Navbar />
        <Switch>
          <Route exact path="/">
            <About />
          </Route>
          <Route exact path="/contact">
            <Contact />
          </Route>
          <Route exact path="/portfolio">
            <Portfolio />
          </Route>
        </Switch>
        <br />
        <br />
        <br />
        <br />
      </Router>
    </div>
  );
}

export default App;
