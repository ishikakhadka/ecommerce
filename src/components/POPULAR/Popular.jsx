import React from "react";
import data from "./PopularData";
import "./Popular.css";

const Popular = () => {
  return (
    <div className="popular m-5">
      <h2 className="mb-5 cardtopic">POPULAR ITEMS</h2>
      <div className="d-flex flex-wrap gap-4">
        {data.map((item, i) => (
          <div key={i} className="card" style={{ width: "18rem" }}>
            <img src={item.image} className="card-img-top" alt={item.name} />
            <div className="card-body">
              <h5 className="card-title">{item.name}</h5>
              <p className="card-text">{item.description}</p>
              <a href="#" className="btn btn-danger">
                Add to cart.
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Popular;
