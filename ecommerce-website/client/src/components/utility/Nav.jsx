import React from "react";
import { Link } from "react-router-dom";

const Nav = props => (
  <div className="test">
      <nav className="navbar navbar-light bg-light fixed-top">
        <a className="navbar-brand" href="/">
          <img
            src="https://cdn.pixabay.com/photo/2018/09/07/11/25/graphic-3660457__480.png"
            width="30"
            height="30"
            className="d-inline-block align-top"
            alt=""
          />
          Instrument<span style={{ color: "gold" }}>2.0</span>
        </a>
        <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
            {props.currentUser
				? (
          <>
              <li className="nav-item">
                <a className="nav-link" href="/">
                  HOME <span className="sr-only">(current)</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/products">
                  PRODUCTS
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/contact">
                  CONTACT US
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/admin">
                  ADMIN
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/logout">
                  LOG OUT
                </a>
              </li>
              </>
        )
        : (
          <>
              <li className="nav-item">
                <a className="nav-link" href="/">
                  HOME <span className="sr-only">(current)</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/products">
                  PRODUCTS
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/contact">
                  CONTACT US
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/login">
                  LOG IN
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/signup">
                  SIGN UP
                </a>
              </li>
              </>
        )}
            </ul>
          </div>
        </nav>
      </nav>
  </div>
);

export default Nav;
