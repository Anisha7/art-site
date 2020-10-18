import React from "react";
import "./styles.scss";
import pinkstatue from "../../images/art/pinkstatue.jpg";
import goddessportrait from "../../images/art/goddessportrait.jpg";
import pinkdesigntee from "../../images/art/pinkdesigntee.jpg";
import humanexperimenttiny from "../../images/art/humanexperimenttiny.jpg";

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
      <ArtContainer img={pinkstatue} alt="Beautiful pink ribbon dancer" />
      <ArtContainer
        img={goddessportrait}
        alt="Beautiful goddess portrait with poem"
      />
      <ArtContainer
        img={pinkdesigntee}
        alt="Classic white tee with a blond dark skin lady in pink shirt"
      />
      <ArtContainer
        img={humanexperimenttiny}
        alt="Four small paintings aligned neatly together"
      />
    </div>
  );
};

export default Art;
