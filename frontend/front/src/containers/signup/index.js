import React from 'react'
import { Box, Container, Row, Col , Jumbotron , Button , Nav ,NavDropdown, Navbar, Image,Form} from 'react-bootstrap';
import Header from "../../components/header"
import Input from "../../UI/Input_helping";
import {Redirect} from 'react-router-dom'
import { useSelector } from 'react-redux';
/**
* @author
* @function signup
**/

const Signup = (props) => {

  const auth = useSelector(state => state.auth)

  if(auth.authenticate){
    return <Redirect to={`/admin`} />
  }

  return(
    <>
      <Header />  
            <Container>
                <Row style={{marginTop:"75px"}}>
                    <Col md={{ span:6 , offset:3}}>
                        <Form>
                          <Row>
                            <Col md={{span:6}}>
                              <Input 
                                label="First Name"
                                placeholder="First Name"
                                value=""
                                type="text"
                                OnChange={()=>{}}
                              />
                            </Col>

                            <Col md={{span:6}}>
                              <Input 
                                label="Last Name"
                                placeholder="Last Name"
                                value=""
                                type="text"
                                OnChange={()=>{}}
                              />
                            </Col>
                          </Row>

                            
                            <Input 
                                label="Email"
                                placeholder="Email"
                                value=""
                                type="email"
                                error_message="We'll never share your email with anyone else."
                                OnChange={()=>{}}
                            />
                            

                            <Input 
                                label="Password"
                                placeholder="Password"
                                value=""
                                type="password"                               
                                OnChange={()=>{}}
                            />

                            <Button variant="primary" type="submit">
                                Submit
                            </Button>
                        </Form>
                    </Col>
                </Row>   
            </Container>
        </>
   )

 }

export default Signup