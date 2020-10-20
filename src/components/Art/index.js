import React from "react";
import "./styles.scss";
import { artdata } from "./data";
import BuyPrintsButton from "../BuyPrintsButton";

const ArtContainer = ({ img, alt, status, price, size, type, src }) => {
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
        {src ? <BuyPrintsButton src={src} /> : null}
      </div>
    </div>
  );
};

const Art = () => {
  return (
    <div className="art-section">
      {artdata.map(({ img, alt, status, price, size, type, src }) => (
        <ArtContainer
          img={img}
          alt={alt}
          status={status}
          price={price}
          size={size}
          type={type}
          src={src}
        />
      ))}
    </div>
  );
};

export default Art;
