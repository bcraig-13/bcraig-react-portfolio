import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

//Need to set up routes in all "to='#'"
//Need ternary to display which nav tab is active. (Ref 20-10/Components/Navbar/index.js)

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg sticky-top">
      <p className="navbar-brand my-name">
        Brandon Craig
      </p>
      <button className="navbar-toggler navbar-light" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav mx-auto">
          <li className="nav-item active zoom">
            <Link className="nav-link" to="/">
              About Me
            </Link>
          </li>
          <li className="nav-item zoom">
            <Link className="nav-link" to="/portfolio">
              My Portfolio
            </Link>
          </li>
          <li className="nav-item zoom">
            <Link className="nav-link" to="/contact">
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
