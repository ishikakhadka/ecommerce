import React from "react";
import { Box, Button } from "@mui/material";
import { borderColor, color } from "@mui/system";
import shoes from "./shoes.png";
import bags from "./bags.png";
import shirts from "./shirts.png";
import formals from "./formal.png";
import "./Kids.css";
const Kids = () => {
  return (
    <div>
      {/* <div className="search">
          <div>
            <input
              class="srch"
              type="text"
              placeholder="What are you looking for?"
            />

            <i class="bi bi-search"></i>
            <h2 className="txt">Frequently searched:</h2>
            <button class="bton">Traditional</button>
            <button class="bton">Athleisure</button>
            <button class="bton">Formal</button>
          </div>
        </div> */}
      <div className="categories">
        <div>
          <div
            style={{
              width: "210px", // width of the circle
              height: "210px", // height of the circle
              borderRadius: "50%", // makes it round
              backgroundColor: "rgba(9, 179, 139, 0.49)", // color of the circle
              padding: "15px",
            }}
          >
            <img class="cat" src={shoes}></img>
          </div>
          <div>
            <h3 className="topics">SHOES</h3>
          </div>
        </div>
        <div>
          <div
            style={{
              width: "210px", // width of the circle
              height: "210px", // height of the circle
              borderRadius: "50%", // makes it round
              backgroundColor: "rgba(9, 179, 139, 0.49)", // color of the circle
              padding: "15px",
            }}
          >
            <img class="cat" src={bags}></img>
          </div>
          <div>
            <h3 className="topics">BAGS</h3>
          </div>
        </div>
        <div>
          <div
            style={{
              width: "210px", // width of the circle
              height: "210px", // height of the circle
              borderRadius: "50%", // makes it round
              backgroundColor: "rgba(9, 179, 139, 0.49)", // color of the circle
              padding: "15px",
            }}
          >
            <img class="cat" src={shirts}></img>
          </div>
          <div>
            <h3 className="topics">CASUAL WEARS</h3>
          </div>
        </div>
        <div>
          {" "}
          <div
            style={{
              width: "210px", // width of the circle
              height: "210px", // height of the circle
              borderRadius: "50%", // makes it round
              backgroundColor: "rgba(9, 179, 139, 0.49)", // color of the circle
              padding: "15px",
            }}
          >
            <img class="cat" src={formals}></img>
          </div>
          <div>
            <h3 className="topics">FORMAL WEARS</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Kids;
