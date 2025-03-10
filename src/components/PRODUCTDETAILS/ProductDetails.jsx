import React from "react";
import pshoes from "./pdetailsShoes.jpg";
import "./ProductDetails.css";

const ProductDetails = () => {
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
            <li>WOMEN</li>
            <li>CONTACT US</li>
          </ul>
        </div>
      </div>
      <div className="details">
        <div className="d-flex justify-content-center gap-5 ">
          <div className="left">
            <div>
              <img src={pshoes} alt="" />
            </div>
            <div className="d-flex gap-3 subimg">
              <img src={pshoes} alt="" />
              <img src={pshoes} alt="" />
              <img src={pshoes} alt="" />
            </div>
          </div>
          <div className="right">
            <h2>Nike shoes</h2>
            <p>Purchased on 2020-08-12</p>
            <p className="star">
              <i class="bi bi-star"></i>
              <i class="bi bi-star"></i>
              <i class="bi bi-star"></i>
              <i class="bi bi-star"></i>
              <i class="bi bi-star"></i>
            </p>
            <h4>Rs.2400</h4>
            <div className="d-flex gap-3">
              <button className="info1">Male</button>
              <button className="info1">Sport Shoes</button>
            </div>
            <div>
              <p>IF YOU NEED FOOTBALL GROUND SHOES </p>
            </div>
            <div className="d-flex gap-3 ">
              <button className="dets">NON-EXCHANGEABLE</button>
              <button className="dets">NON-REFUNDABLE</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
