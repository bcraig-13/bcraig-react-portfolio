import React from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";
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
          {/* <Route path="*">
            <About />
          </Route> */}
        </Switch>
        <br />
        <br />
        <br />
        <br />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
