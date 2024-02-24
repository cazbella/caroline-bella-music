import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from "../../assets/images/logos-large/3.png";
import logoThin from "../../assets/images/logo-thinner.png";
import "./Navbar.css";

function CustomNavbar() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary navbar">
      <Container>
        <Navbar.Brand as={Link} to="/">
          <img
            src={logoThin}
            alt="Caroline Bella Music Logo"
            style={{ maxHeight: '', maxWidth: '270px', borderRadius: 0, marginTop: '10px', marginBottom: '10px'}}
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto nav-links"> {/* Use mx-auto to spread out the links */}
            <Nav.Link as={Link} to="/" className="me-5">Home</Nav.Link>
            <Nav.Link as={Link} to="/gallery" className="me-5">Gallery</Nav.Link>
            <Nav.Link as={Link} to="/music" className="me-5">Music</Nav.Link>
            <Nav.Link as={Link} to="/gigs" className="me-5">Gigs</Nav.Link>
          </Nav>
          <Nav>
            <NavDropdown title="Contact" id="basic-nav-dropdown">
              <NavDropdown.Item id="basic-nav-dropdown" href="mailto:cazbella@myyahoo.com">Email</NavDropdown.Item>
              <NavDropdown.Item id="basic-nav-dropdown" href="https://www.facebook.com/CarolineBellaMusic" target="_blank">Facebook</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CustomNavbar;
