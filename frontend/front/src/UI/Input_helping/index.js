import React from 'react'
import { Box, Container, Row, Col , Jumbotron , Button , Nav ,NavDropdown, Navbar, Image , Form} from 'react-bootstrap';

/**
* @author
* @function Input
**/

const Input = (props) => {
  return(
    <Form.Group controlId ="formBasicEmail">
        <Form.Label>{props.label}</Form.Label>
        <Form.Control type={props.type} placeholder={props.placeholder} value={props.value} onChange={props.OnChange} />
        <Form.Text className="text-muted">
            {props.error_message}
        </Form.Text>
    </Form.Group>
   )

 }

export default Input