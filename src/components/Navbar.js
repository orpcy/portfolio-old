import React from "react";
import {Link, NavLink} from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar fixed-top navbar-expand-sm navbar-light bg-dark border-bottom border-info">
      <Link className="navbar-brand #00bfa5 teal-text text-accent-1 font-weight-bold" to="/">
        ORPCY
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav">
          <NavLink className="nav-item nav-link active #e0f2f1 teal-text text-lighten-4" to="/">
            Home <span className="sr-only">(current)</span>
          </NavLink>
          <NavLink className="nav-item nav-link #e0f2f1 teal-text text-lighten-4" to="/about">
            About
          </NavLink>
          <a className="nav-item nav-link teal-text text-lighten-4" href="#navSection">
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
