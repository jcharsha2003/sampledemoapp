import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { loginContext } from '../../context/loginContext';
import { useContext } from 'react';

import { Link } from 'react-router-dom'
function NavbarMain() {

  let [currentUser,error,userLoginStatus,loginUser,logoutUser]=useContext(loginContext) 
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
              src="https://www.shutterstock.com/image-vector/home-house-hand-care-homeless-260nw-2008784822.jpg"
              width="60"
              height="60"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
          </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto  ">
        <ul className="navbar-nav nav-tabs ms-auto text-decoration-none">
      <li className="nav-item active">
        <Link className="nav-link p-" to="/">Home</Link>
      </li>
      <li className="nav-item">
      <Link className="nav-link " to="/register">Register</Link>
      </li>
      {!userLoginStatus?(
      <li className="nav-item dropdown">
       
      <Link className="nav-link " to="/login" onClick={logoutUser}>Login</Link>
     
      </li>):
      
      ( <li className="nav-item dropdown">
       
      <Link className="nav-link " to="/login">Logout</Link>
      
      </li>)}
      
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