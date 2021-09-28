import React from "react";
import { Container, Row, Col, Card, Button, Navbar, Nav } from "react-bootstrap";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import { Link } from "react-router-dom";

function Startup() {
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
      <Container>
        <Row>
           <Col>
          <Card className="title">
            <Card.Img src="Images/it.jpg" className="info" alt="Card image" />
            <Card.ImgOverlay>
              <Card.Title className="card-text1">Startup title</Card.Title>
              <Card.Text className="card-text">
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
              <Button variants="primary">See Full Details</Button>
            </Card.ImgOverlay>
          </Card>

          <Card className="title">
            <Card.Img src="Images/k.jpg" className="info" alt="Card image" />
            <Card.ImgOverlay>
              <Card.Title className="card-text1">Startup title</Card.Title>
              <Card.Text className="card-text">
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
              <Button variants="primary">See Full Details</Button>
            </Card.ImgOverlay>
          </Card>

          <Card className="title">
            <Card.Img src="Images/l.jpg" className="info" alt="Card image" />
            <Card.ImgOverlay>
              <Card.Title className="card-text1">Startup title</Card.Title>
              <Card.Text className="card-text">
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
              <Button variants="primary">See Full Details</Button>
            </Card.ImgOverlay>
          </Card>
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
}

export default Startup;
