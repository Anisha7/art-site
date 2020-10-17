import React from "react";
import "./styles.scss";
import pinkstatue from "../../images/art/pinkstatue.jpg";
import goddessportrait from "../../images/art/goddessportrait.jpg";
import pinkdesigntee from "../../images/art/pinkdesigntee.jpg";

const ArtContainer = ({ img, alt }) => {
  return (
    <div className="art-section-container">
      <div className="art-container">
        <img src={img} alt={alt} />
      </div>
      <div className="description"></div>
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
    </div>
  );
};

export default Art;
