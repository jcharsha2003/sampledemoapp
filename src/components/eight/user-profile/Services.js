import React from 'react'

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom'

function Services() {
  return (
    <div>
         <Navbar bg="light" expand="lg" className='pb-0'>
    <Container>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto  ">
        <ul className="navbar-nav nav-tabs ms-auto text-decoration-none">
      <li className="nav-item active">
        <Link className="nav-link " to="accomodation">Home</Link>
      </li>
      
    </ul>
      
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
    </div>
  )
}

export default Services