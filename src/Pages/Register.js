import React from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap';
import Header from "../Components/Header"
import Footer from "../Components/Footer"


 function Register() {
    return (
        <>
		<Header />
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