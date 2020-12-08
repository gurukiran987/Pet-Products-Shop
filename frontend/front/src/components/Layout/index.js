import React from 'react'
import { Col, Container, NavLink, Row } from 'react-bootstrap'
import Header from '../header'
import './style.css'

/**
* @author
* @function Layout
**/

const Layout = (props) => {
    return(
      <>
         <Header />
         {
           props.sidebar ?
           <Container fluid>
            <Row>
              <Col md={2} className="sidebar">
                <ul>
                  <li><a exact="true" href={`/admin`}>Home</a></li>
                  <li><a exact="true" href={`/admin/category`}>Category</a></li>
                  <li><a href={`/admin/products`}>Products</a></li>
                </ul>
              </Col>
              <Col md={10} style={{ marginLeft: 'auto' , paddingTop: '60px'}}>
                {props.children}
              </Col>
            </Row>
          </Container>
          :
          props.children
         }
          
          
      </>
     )
  
   }
  
  export default Layout;