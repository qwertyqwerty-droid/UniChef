// src/components/Header.jsx
import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';


const Header = () => {
  return (
    <Navbar bg="light" expand="lg" className="px-3">
      <Navbar.Brand href="#home">LOGO</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#restaurants">Restaurants</Nav.Link>
          <Nav.Link href="#about">About Us</Nav.Link>
          <Nav.Link href="#contact">Contact Us</Nav.Link>
          <Nav.Link href="#account">Account Icon</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
