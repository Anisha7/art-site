import React from "react";
import "./styles.css";

const BuyPrintsButton = ({ src }) => {
  return (
    <a href={src} className="buy-prints-button">
      BUY PRINTS
    </a>
  );
};

export default BuyPrintsButton;
