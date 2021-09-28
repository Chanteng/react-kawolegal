import React from "react";
import { Button, Container, Row, Navbar, Nav } from "react-bootstrap";
import Header from "../Components/Header"
import Footer from "../Components/Footer"



function Home() {
  return (
    <>
    <Header />
    <Navbar.Collapse id="responsive-navbar-nav"  >
            <Nav className="me-auto header-text">
              <Nav.Link href="/" target="_blank">Home</Nav.Link>
              <Nav.Link href="/startup"target="_blank"  >Startup</Nav.Link>
              <Nav.Link href="/register" target="_blank">Register</Nav.Link>
              <Nav.Link href="/login" target="_blank">Login</Nav.Link>
            </Nav>
          </Navbar.Collapse>
    <Container className="con">
        <Row>
    <div className="txt">
      <h3>KAWO LEGAL</h3>
      <h5>A collaborative ecosystem for promblems</h5> <p></p>
      <h5>solvers and support for Startups</h5>
      <Button href="/register" variant="primary" target="_blank"> Register Now! </Button>
      </div>
      </Row>
      </Container>
      <Footer />
    </>
  );
}

export default Home;
