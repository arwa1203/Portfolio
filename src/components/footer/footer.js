import React from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import "./footer.scss";

const Footer = () => {
  return (
    <footer>
      <a href="http://www.github.com/arwa1203">
        <i className="fab fa-github-alt"></i>
      </a>
      <a href="https://www.linkedin.com/in/arwa-ahmed/">
        <i className="fab fa-linkedin"></i>
      </a>
      <div>
        <i className="fas fa-copyright"></i>Arwa Ahmed 2021
      </div>
    </footer>
  );
};

export default Footer;
