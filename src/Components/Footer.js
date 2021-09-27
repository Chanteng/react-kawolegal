import React from "react";
import { Container, Col, Row } from "react-bootstrap";

function Footer() {
  return (
    <>
      <Container className="footer">
        <Row>
          <Col md="4">
            <h6>2017 Kawolegal. All Rights Reserved</h6>
          </Col>
          <Col md="4"></Col>
          <Col md="4" className="img">
            <img src="Images/fb.png" width="40" height="40" />
            <img src="Images/tw.png" width="30" height="30" />
            <img src="Images/in.png" width="30" height="30" />
            <img src="Images/ig.png" width="30" height="30" />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Footer;
