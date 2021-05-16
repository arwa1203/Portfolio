import React from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import "./header.scss";

const Header = () => {
  return (
    <Navbar collapseOnSelect expand="md">
      <Navbar.Brand href="/" id="brand">
        <img src="drawing-5.svg" />
      </Navbar.Brand>

      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse
        id="responsive-navbar-nav"
        className="justify-content-end"
      >
        <Nav className="mr-auto" />
        <Nav.Link href="/">
          <b className="linkPrefix">01. </b>Home
        </Nav.Link>
        <Nav.Link href="/projects">
          <b className="linkPrefix">02. </b>Projects
        </Nav.Link>
        <Nav.Link href="/contact">
          <b className="linkPrefix">03. </b>Contact
        </Nav.Link>
        <Nav.Link href="/resume">
          <b className="linkPrefix">04. </b>Resume
        </Nav.Link>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
