import React from "react";
import "./styles.css";
import logo from "../../images/logo.png";

const Banner = () => {
  return (
    <div className="banner">
      <img src={logo} alt="Company logo initials AJ" />
      <div className="icons">{/* fontawesome ig, fb, email */}</div>
      <div className="textblock">
        Anisha Jain is an artist. She gives away her art to raise money for
        charities. Each auction is posted on her instagram, facebook, and on
        this site. Contact her for custom requests via email or a message on her
        socials.
      </div>
    </div>
  );
};

export default Banner;
