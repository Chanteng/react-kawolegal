import React from "react";
import { Button, Container, Row } from "react-bootstrap";

function Home() {
  return (
    <>
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
    </>
  );
}

export default Home;
