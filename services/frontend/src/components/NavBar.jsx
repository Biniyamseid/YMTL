import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const NavBar = props => {
  let menu = (
    <div className="navbar-end">
       
       
       <div className="is-hidden-mobile" style={{ width: '100%', height: '40px' }}></div>

      <Link
        to="/register"
        className="navbar-item is-secondary"
        data-testid="nav-register"
      >
        Register
      </Link>
      <Link
        to="/login"
        className="navbar-item is-secondary button is-large is-primary p-6 is-flex is-align-items-center"
        data-testid="nav-login"
      >
        Log In
      </Link>
    </div>
  );
  if (props.isAuthenticated()) {
    menu = (
      <div className="navbar-end">
             
      <div className="is-hidden-mobile" style={{ width: '100%', height: '40px' }}></div>
        <Link
          to="/status"
          className="navbar-item  button is-large  is-primary is-rounded raised is-primary"
          data-testid="nav-status"
        >
          User Status
        </Link>
        <span
          onClick={props.logoutUser}
          className="navbar-item link"
          data-testid="nav-logout button is-large is-primary"
        >
          Log Out
        </span>
      </div>
    );
  }
  return (
    <nav
      className="navbar is-fresh is-transparent no-shadow"
      role="navigation"
      aria-label="main navigation"
    >
      <section className="container">
        <a
          role="button"
          className="navbar-burger"
          aria-label="menu"
          aria-expanded="false"
          data-target="navbar-menu"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>

        <div id="navbar-menu" className="navbar-menu is-static">
          
          <div className="navbar-start">

            <Link to="/" className="navbar-item nav-title button  is-large is-primary ">
            ymtl
            </Link>
          </div>

          {menu}
        </div>
      </section>
    </nav>
  );
};

NavBar.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.func.isRequired
};

export default NavBar;
