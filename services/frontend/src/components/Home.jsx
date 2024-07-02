import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const Home = () => (
  <div>
    <section className="hero is-fullheight is-default is-bold">
      <div className="hero-body">
        <div className="container">
          <div className="columns is-vcentered">
            <div className="column is-5 is-offset-1 landing-caption">
              <h1 className="title is-10 is-bold is-spaced  is-large is-primary">
                YMTL
              </h1>
              <h2 className="subtitle is-5 is-muted">
                .
              </h2>
              <div className="button-wrap">
              
                <a
                  href="https://github.com/biniyamseid"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="button cta is-rounded"
                >
                  Where is ymtl?
                </a>
                {/* <div className="navbar-end">

                  <Link
                    to="/register"
                    className="navbar-item is-secondary"
                    data-testid="nav-register"
                  >
                    Register
                  </Link>
                  <Link
                    to="/login"
                    className="navbar-item is-secondary button is-large is-primary"
                    data-testid="nav-login"
                  >
                    Log In
                  </Link>
                </div> */}
              </div>
            </div>
          
          </div>
        </div>
      </div>
    </section>

   </div>
       
);

export default Home;
