import React from 'react';
import { Container } from 'react-bootstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faSpotify, faAmazon, faSoundcloud } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import "./Footer.css";

function Footer() {
  const iconStyle = {
    fontSize: '2rem',
    margin: '0 10px',
    color: 'black', 
  };

  return (
    <footer className="bg-light text-dark py-4 footer">
      <Container>
        <div className="d-flex justify-content-center mb-3">
          <a href="https://www.facebook.com/BridgtownConcertShowBand/" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faFacebook} className="icon" style={iconStyle} />
          </a>
          <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faInstagram} className="icon" style={iconStyle} />
          </a>
          <a href="https://www.spotify.com/" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faSpotify} className="icon" style={iconStyle} />
          </a>
          <a href="https://www.amazon.com/" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faAmazon} className="icon" style={iconStyle} />
          </a>
          <a href="https://soundcloud.com/" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faSoundcloud} className="icon" style={iconStyle} />
          </a>
          <a href="mailto:bridgtownconcertshowband@gmail.com" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faEnvelope} className="icon" style={iconStyle} />
          </a>
        </div>
        <p className="text-center text-muted mb-0">© 2024 Caroline Bella Music</p>
      </Container>
    </footer>
  );
}

export default Footer;
