import React, { Component } from "react";
import flipkartPlusIcon from "../images/flipkart-plus.png";
import "../css/Navbar.css";
import $ from "jquery";

export class Navbar extends Component {
  render() {
    const search = () => {
      let searchString = $("#nav-search-bar").val();
    };

    return (
      <nav
        id="navbar"
        className="custom-font navbar navbar-expand-lg navbar-dark"
      >
        <a className="navbar-brand" href="#">
          <img width="80" src={flipkartPlusIcon} alt="" />
        </a>
        <div id="navbar-actions-container">
          <div id="nav-search-container">
            <input
              id="nav-search-bar"
              type="text"
              placeholder="Search for products, brands and more"
            />
            <button
              id="navbar-search-button"
              onClick={() => {
                search();
              }}
            >
              <i className="fa fa-search"></i>
            </button>
          </div>
          <ul className="navbar-nav mr-auto">
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Account
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <a className="dropdown-item" href="#">
                  Action
                </a>
                <a className="dropdown-item" href="#">
                  Another action
                </a>
                <div className="dropdown-divider"></div>
                <a className="dropdown-item" href="#">
                  Something else here
                </a>
              </div>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Dropdown
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <a className="dropdown-item" href="#">
                  Action
                </a>
                <a className="dropdown-item" href="#">
                  Another action
                </a>
                <div className="dropdown-divider"></div>
                <a className="dropdown-item" href="#">
                  Something else here
                </a>
              </div>
            </li>

            <li className="nav-item active">
              <a className="nav-link" href="#">
                Cart
              </a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Navbar;
