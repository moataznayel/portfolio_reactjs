import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "./naav.css";
import logo from "../../images/WhatsApp Image 2023-08-10 at 11.53.34 PM.jpeg";
const Naav = () => {
  return (
    <Navbar expand="lg" className="navbar">
      <Container>
        <Navbar.Brand href="#home">
          {/* <img src={logo} alt="" width={"30px"} height={"30px"} /> */}
          <h3 className="logo">M-Nayel</h3>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#home" active>
              Home
            </Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#porfolio">Portfolio</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
          </Nav>
          <div className="ms-auto">
            <button className="download">Download CV</button>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Naav;
