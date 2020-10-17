import React from "react";
import "./styles.css";
import logo from "../../images/logo.png";
import { faInstagram, faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faEnvelopeOpenText } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Banner = () => {
  return (
    <div className="banner">
      <img src={logo} alt="Company logo initials AJ" />
      <div className="icons">
        {/* fontawesome ig, fb, email, redbubble */}
        <a target="_blank" href="https://www.instagram.com/annnysha7/">
          <FontAwesomeIcon className="icon" icon={faInstagram} size="2x" />
        </a>
        <a target="_blank" href="https://www.facebook.com/Almondbeans/">
          <FontAwesomeIcon className="icon" icon={faFacebook} size="2x" />
        </a>
        <a target="_blank" href="mailto: anishaj037@gmail.com">
          <FontAwesomeIcon
            className="icon"
            icon={faEnvelopeOpenText}
            size="2x"
          />
        </a>
      </div>
      <div className="textblock">
        Anisha Jain is an artist. She gives away her art to raise money for
        charities. Each auction is posted on her instagram, facebook, and on
        this site. Contact her for custom requests and buy her prints on
        <span>
          <a
            href="https://www.redbubble.com/people/almondbeans/shop?asc=u"
            target="_blank"
          >
            redbubble
          </a>
        </span>
        .
      </div>
    </div>
  );
};

export default Banner;
