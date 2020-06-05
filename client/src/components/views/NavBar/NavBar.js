import React from "react";
import { withRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";


function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light navbarStyle">
      <a className="navbar-brand brand-logo" href="/">
        SERIZEI.
      </a>

      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <i className="fa fa-bars" />
      </button>

      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ml-auto">
          <li class="nav-item">
            <a class="nav-link" href="/login">
              Login
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/register">
              Sign up
            </a>
          </li>
        </ul>
      </div>

      
    </nav>
  );
}

export default withRouter(NavBar);
