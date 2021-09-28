import React from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap';
import Header from "../Components/Header"
import Footer from "../Components/Footer"


 function Login() {
    return (
        <>
            <Header />
        <Container>
            <Row>
                <Col>
                <h5>Already a Member. Login to add your Startup</h5>

                <form>
  			<div class="form-group">
  			  <label for="formGroupExampleInput"> <b>Email address</b> </label>
  				  <input type="email" class="form-control" id="formGroupExampleInput" placeholder="Email address" required="required" />
 			 </div>
 			 <div class="form-group">
 			   <label for="formGroupExampleInput2"> <b>Password</b> </label>
  				  <input type="password" class="form-control" id="formGroupExampleInput2" placeholder="Password" required="required" />
  			</div>
  			<Button type="submit" className="bttn" >Sign In</Button>
  		</form>

                </Col>
            </Row>
        </Container>
        <Footer />
        </>
    )
}


export default Login;