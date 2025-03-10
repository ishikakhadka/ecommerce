import React from "react";
import { Box } from "@mui/material";
import "./Contact.css";
const Contact = () => {
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

            <a href="/men">
              <li>MEN</li>
            </a>
            <a href="/women">
              <li>WOMEN</li>
            </a>
            <a href="/kids">
              <li>KIDS</li>
            </a>
            <a href="/about">
              <li>ABOUT</li>
            </a>
          </ul>
        </div>
        <div className="icons">
          <a href="/cart">
            <i class="bi bi-cart-check"></i>
          </a>
          <i class="bi bi-heart"></i>
        </div>
      </div>
      <h3 class="abus text-center">REACH OUT TO US:</h3>
      <div class="maincontact">
        <div class="contact">
          <h3>
            📧E-mail:
            <br /> info@thriftandthreads.com
          </h3>
        </div>
        <div class="contact">
          <h3>
            📍 Address:
            <br /> Kathmandu, Nepal
          </h3>
        </div>
        <div class="contact">
          <h3>
            📞 Phone:
            <br /> +977-9876543210
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Contact;
