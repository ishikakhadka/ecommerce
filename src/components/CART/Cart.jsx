import React from "react";
import cart from "./cart.jpg";
import "./Cart.css";
const Cart = () => {
  return (
    <div>
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
