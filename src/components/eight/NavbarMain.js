import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


import { Link } from 'react-router-dom'
function NavbarMain() {
  return (
    // <div className='navbar p-0 '>
    //     <ul className='nav nav-tabs border-dark w-100 justify-content-center bg-light'>
    //         <li className='nav-item'>
    //             <Link className='nav-link' to="/">Home</Link>
    //         </li>
    //         <li className='nav-item'>
    //             <Link className='nav-link' to="/register">Register</Link>
    //         </li>
    //         <li className='nav-item'>
    //             <Link className='nav-link' to="/login">Login</Link>
    //         </li>
    //         <li className='nav-item'>
    //             <Link className='nav-link' to="/aboutus">Aboutus</Link>
    //         </li>
    //     </ul>
    // </div>
    <Navbar bg="light" expand="lg" className='pb-0'>
    <Container>
    <Navbar.Brand to="/">
            <img
              src=""
              width="30"
              height="30"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
          </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto pb-0 ">
        <ul className="navbar-nav nav-tabs ms-auto text-decoration-none">
      <li className="nav-item active">
        <Link className="nav-link " to="/">Home</Link>
      </li>
      <li className="nav-item">
      <Link className="nav-link " to="/register">Register</Link>
      </li>
      <li className="nav-item dropdown">
       
      <Link className="nav-link " to="/login">Login</Link>
      
      </li>
      <li className="nav-item">
      <Link className="nav-link " to="/aboutus">Aboutus</Link>
      </li>
    </ul>
          
          
          
          
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}

export default NavbarMain