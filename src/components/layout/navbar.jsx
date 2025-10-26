import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logoThin from "../../assets/images/logo-thinner.png";
import "./navbar.css";

function CustomNavbar() {
  const [menuExpanded, setMenuExpanded] = useState(false);

  const handleLinkClick = () => {
    setMenuExpanded(false); // Close the menu when a link is clicked
  };

  return (
    <Navbar expand="lg" className="bg-body-tertiary navbar" expanded={menuExpanded}>
      <Container>
        <Navbar.Brand as={Link} to="/" onClick={() => setMenuExpanded(false)}>
          <img
            src={logoThin}
            alt="Caroline Bella Music Logo"
            style={{ maxHeight: '', maxWidth: '270px', borderRadius: 0, marginTop: '10px', marginBottom: '10px'}}
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={() => setMenuExpanded(!menuExpanded)} />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto nav-links" onClick={handleLinkClick}>
            <Nav.Link as={Link} to="/" className="me-5">Home</Nav.Link>
            <Nav.Link as={Link} to="/gallery" className="me-5">Gallery</Nav.Link>
            <Nav.Link as={Link} to="/music" className="me-5">Music</Nav.Link>
            <Nav.Link as={Link} to="/gigs" className="me-5">Gigs</Nav.Link>
          </Nav>
          <Nav>
            <NavDropdown title="Contact" id="basic-nav-dropdown">
              <NavDropdown.Item href="mailto:carolinelane@live.co.uk">Email</NavDropdown.Item>
              <NavDropdown.Item href="https://www.facebook.com/CarolineBellaMusic" target="_blank">Facebook</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CustomNavbar;
