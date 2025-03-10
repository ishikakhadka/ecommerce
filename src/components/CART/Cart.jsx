import React from "react";
import cart from "./cart.jpg";
import "./Cart.css";
const Cart = () => {
  return (
    <div>
      <div className="nav">
        <div>
          <i class="bi bi-flower3 log">
            <span class="logo">Thrift & Thread</span>
          </i>
        </div>
        <div>
          <ul className="list">
            <a href="/">
              <li>HOME</li>
            </a>
            <a href="/about">
              <li>ABOUT</li>
            </a>

            <a href="/men">
              <li>MEN</li>
            </a>
            <a href="/women">
              <li>WOMEN</li>
            </a>
            <a href="/kids">
              <li>KIDS</li>
            </a>
            <a href="/contact">
              <li>CONTACT US</li>
            </a>
          </ul>
        </div>
        <div className="icons">
          <a href="/cart">
            <i class="bi bi-cart-check"></i>
          </a>
          <i class="bi bi-heart"></i>
        </div>
        <a href="/login">
          <button className="btnnn">LOGIN NOW</button>
        </a>
      </div>
      <div className="cart-hero">
        <img src={cart} alt="" />

        <h2>YOUR CART IS EMPTY!!!</h2>
        <a href="/">
          <button className="cart-btn">KEEP BROWSING</button>
        </a>
      </div>
    </div>
  );
};

export default Cart;
