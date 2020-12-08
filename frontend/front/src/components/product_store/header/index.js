import React from 'react'
import './style.css'
import Header from "../../header"
import { Col, Container, Row } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import Layout from '../../Layout'

/**
* @author
* @function
**/

const Headerfake = (props) => {
  return(
      <Layout sidebar>
        <h3>THIS IS THE HOME PAGE.
          NAVIGATE TO THE PRODUCTS OR CATEGORIES PAGE.</h3>
      </Layout>
    
   )

 }

export default Headerfake