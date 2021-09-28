import React from "react";
import { Container, Nav, Navbar, Col, Row } from "react-bootstrap";

function Header() {
  return (
    <>
     <Container>
       <Row>
      <Navbar collapseOnSelect expand="lg" variant="dark" className="header">
        <Navbar variant="dark">
    <Container>
      <Navbar.Brand href="/" className="text">
        <img alt="a" src="Images/2.png" width="60" height="60" className="d-inline-block align-top"/>
      Kawo Legal
      </Navbar.Brand>
    </Container>
  </Navbar>
  <Col md="4"></Col>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Col md="3">
          <Navbar.Collapse id="responsive-navbar-nav"  >
            <Nav className="me-auto header-text">
              <Nav.Link href="/" target="_blank">Home</Nav.Link>
              <Nav.Link href="/startup"target="_blank"  >Startup</Nav.Link>
              <Nav.Link href="/register" target="_blank">Register</Nav.Link>
              <Nav.Link href="/login" target="_blank">Login</Nav.Link>
            </Nav>
          </Navbar.Collapse>
          </Col>
          </Navbar>
          </Row>
        </Container>
      
    </>
  );
}

export default Header;
