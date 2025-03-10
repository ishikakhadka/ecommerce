import { Box, Button, Typography } from "@mui/material";
import React from "react";
import Image from "./image.png";
import Image2 from "./image2.png";
import kids from "./kids.png";
import Popular from "../POPULAR/Popular";
import Kids from "../KIDS copy/Kids";

const Home = () => {
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
            <li>HOME</li>
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
      <div class="intro">
        <a href="/men">
          <div
            style={{
              width: "220px", // width of the circle
              height: "210px", // height of the circle
              borderRadius: "35%", // makes it round
              backgroundColor: "rgba(3, 118, 141, 0.5)", // color of the circle
            }}
          >
            <img className="img" src={Image} />
          </div>
        </a>
        <a href="/kids">
          <div
            style={{
              width: "250px", // width of the circle
              height: "250px", // height of the circle
              borderRadius: "35%", // makes it round
              backgroundColor: "rgba(9, 179, 139, 0.49)", // color of the circle
            }}
          >
            <img className="img" src={kids} />
          </div>
        </a>

        <a href="/women">
          <div
            style={{
              width: "220px", // width of the circle
              height: "210px", // height of the circle
              borderRadius: "35%", // makes it round
              backgroundColor: "rgba(72, 4, 38, 0.49)", // color of the circle
            }}
          >
            <img className="img" src={Image2} />
          </div>
        </a>
      </div>
      <div>
        <Popular />
      </div>
    </div>
  );
};

export default Home;
