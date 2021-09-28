import React from 'react'
import { Container, Row, Col, Button, Nav, Navbar } from 'react-bootstrap';
import Header from "../Components/Header"
import Footer from "../Components/Footer"
import { Link } from 'react-router-dom';


 function Register() {
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
        <Container >
          <Row>
            <Col>
            <h5>Join Kawolegal. Sign up to get your Startup listed now!</h5>

            <form>

  		    	<div className="form-group">
  			      <label for="formGroupExampleInput"> <b>Full Name</b> </label>
  				   <input type="text" className="form-control" id="formGroupExampleInput" placeholder="Full Name" required="required" />
 			   </div>

 		  	 <div className="form-group">
 			      <label for="formGroupExampleInput2"> <b>Email address</b> </label>
  				  <input type="email" className="form-control" id="formGroupExampleInput2" placeholder="Email address" required="required" />
  			</div>

  			<div className="form-group">
 			      <label for="formGroupExampleInput2"> <b>Password</b></label>
  				  <input type="password" className="form-control" id="formGroupExampleInput2" placeholder="Password" required="required" />
  			</div>

  			<div className="form-group">
 			       <label for="formGroupExampleInput2"> <b>Confirm Password</b> </label>
  				  <input type="password" className="form-control" id="formGroupExampleInput2" placeholder="Confirm Password" required="required" />
  			</div>

  			<Button type="submit" variant="primary">Sign Up</Button>

	</form>
            </Col>
          </Row>
        </Container>
		<Footer />
        </>
    )
}


export default Register;