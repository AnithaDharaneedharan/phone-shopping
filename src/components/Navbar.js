import React, { Component } from "react";
import logo from "../logo.svg";
import { Link } from "react-router-dom";

export default class Navbar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-sm bg-primary navbar-dark px-sm-5">
          <Link to="/">
            <img src={logo} alt="logo" className="navbar-brand"/>
          </Link>
          <ul className="navbar-nav align-items-center">
            <li className="nav-item ml-5">
            <Link to="/" className="nav-link" >
                products
              </Link>
            </li>
          </ul>
          <Link to="/cart" >
                <button>
                    <i className="fa fa-cart-plus">my cart</i>
                </button>
              </Link>
        </nav>
      </div>
    );
  }
}
