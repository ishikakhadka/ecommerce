import React from "react";
import { Link } from "react-router";

const Navbar = () => {
  return (
    <>
      <div className="navbar-content">
        <div>
          <i class="bi bi-flower3 log">
            <span class="logo">Thrift & Thread</span>
          </i>
        </div>
        <div>
          <ul className="list">
            <Link to="/">
              <li>HOME</li>
            </Link>

            <Link to="/about">
              <li>ABOUT</li>
            </Link>

            <Link to="/men">
              <li>MEN</li>
            </Link>

            <Link to="/women">
              <li>WOMEN</li>
            </Link>

            <Link to="/kids">
              <li>KIDS</li>
            </Link>

            <Link to="/contact">
              <li>CONTACT US</li>
            </Link>
          </ul>
        </div>
        <div className="icons">
          <Link to="/cart">
            <i class="bi bi-cart-check"></i>
          </Link>
          <i class="bi bi-heart"></i>
        </div>
        <Link to="/login">
          <button className="btnnn">LOGIN NOW</button>
        </Link>
      </div>
    </>
  );
};

export default Navbar;
