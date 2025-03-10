import { Box } from "@mui/material";
import React from "react";
import img from "./about2.jpg";
import img2 from "./about.jpg";
import img3 from "./about3.jpg";
import "./About.css";
const About = () => {
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
      <h3 class="abus">ABOUT US</h3>
      <div className="abt">
        <div className="about">
          At Thrift & Thread, we believe that fashion is more than just
          clothing—it's a canvas for stories, memories, and self-expression.
          Embrace the beauty of the past, where every thread tells a story. Our
          store is a curated collection of timeless treasures, each piece with
          its own history, waiting to be woven into your journey. We are
          passionate about sustainability and the idea that style transcends
          time. From vintage gems to modern classics, we offer you more than
          just items—we offer a chance to wear history and create new memories
          with every piece. Join us in celebrating the art of thrift, where
          every thread connects the past, present, and future.
        </div>
        <div>
          <img className="abot" src={img}></img>
          <img className="abot" src={img2}></img>
        </div>
        <div>
          <img className="abot" src={img3}></img>
        </div>
      </div>
    </div>
  );
};

export default About;
