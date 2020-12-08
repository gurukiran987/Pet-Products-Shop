import React from 'react'
import { Container, Button , Nav , Navbar} from 'react-bootstrap';
import "../../css_seperate/home.css";
import { NavLink,Link} from 'react-router-dom';
/**
* @author
* @function layout
**/

const Home = (props) => {

  return(
    <>  
      <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark">
          <Container>
            <Link to="/" className="navbar-brand">PETZANZA</Link>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="mr-auto">
              </Nav>
              <Nav>
                  <li className="nav-item">
                      <NavLink to="signin" className="nav-link">ADMIN SIGNIN</NavLink>
                  </li>
              </Nav>
            </Navbar.Collapse>
          </Container>
      </Navbar>

      <div className="container1">
        <img src="https://www.almonature.com/wp-content/uploads/2015/05/Uomo-e-cane1-5.jpg" width="1535" height="697"/>
        <div className="text-block1">One stop location to all your pet needs!!!<br/>
        </div>
        <Link to="signin">
          <Button className="button1" style={{right:"180px"}} variant="outline-danger">Admin DashBoard</Button>{' '}
        </Link>
        
      </div>
    </>
   )

 }

export default Home