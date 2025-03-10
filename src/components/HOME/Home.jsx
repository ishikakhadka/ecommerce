import { Box, Button, Typography } from "@mui/material";
import React from "react";
import Image from "./image.png";
import Image2 from "./image2.png";
import kids from "./kids.png";
import Popular from "../POPULAR/Popular";
import Kids from "../KIDS copy/Kids";
import { Link } from "react-router";
import Navbar from "../Navbar/Navbar";

const Home = () => {
  return (
    <div>
      <div class="intro">
        <Link to="/men">
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
        </Link>
        <Link to="/kids">
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
        </Link>

        <Link to="/women">
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
        </Link>
      </div>
      <div>
        <Popular />
      </div>
    </div>
  );
};

export default Home;
