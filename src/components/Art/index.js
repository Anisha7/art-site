import React from "react";
import "./styles.scss";
import { artdata } from "./data";

const ArtContainer = ({ img, alt, status, price, size, type }) => {
  return (
    <div className="art-section-container">
      <div className="art-container">
        <img src={img} alt={alt} />
      </div>
      <div className="description">
        {/* Buy prints button */}
        <p className="title">
          {status} - {price}
        </p>
        <p className="size">{size}</p>
        <p className="details">{type}</p>
      </div>
    </div>
  );
};

const Art = () => {
  return (
    <div className="art-section">
      {artdata.map(({ img, alt, status, price, size, type }) => (
        <ArtContainer
          img={img}
          alt={alt}
          status={status}
          price={price}
          size={size}
          type={type}
        />
      ))}
    </div>
  );
};

export default Art;
