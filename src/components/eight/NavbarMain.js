import React from 'react'

import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { loginContext } from '../../context/loginContext';
import { useContext } from 'react';
import "./NavbarMain.css"
import { Link } from 'react-router-dom'
function NavbarMain() {

  let [currentUser,error,userLoginStatus,loginUser,logoutUser]=useContext(loginContext) 
  return (
    
    <Navbar bg="light" expand="lg" className='p-0 hello'>
    <div className='container-fluid mx-3'  >
    <Navbar.Brand to="/" className='hello1 rounded '>
            <img
              src="https://static.thenounproject.com/png/4962285-200.png"
              width="60"
              height="50"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
          </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto  ">
        <ul className="navbar-nav nav-tabs ms-auto text-decoration-none">
      <li className="nav-item active">
        <Link className="nav-link "   style={{padding:"1.3rem"}} to="/">Home</Link>
      </li>
      <li className="nav-item">
      <Link className="nav-link "   style={{padding:"1.3rem"}} to="/register">Register</Link>
      </li>
      {!userLoginStatus?(
      <li className="nav-item dropdown">
       
      <Link className="nav-link   " style={{padding:"1.3rem"}}  to="/login" onClick={logoutUser}>Login</Link>
     
      </li>):
      
      ( <li className="nav-item dropdown">
       
      <Link className="nav-link "   style={{padding:"1.3rem"}} to="/login">Services</Link>
      
      </li>)}
      
      <li className="nav-item">
      <Link className="nav-link "   style={{padding:"1.3rem"}} to="/aboutus">Aboutus</Link>
      </li>
    </ul>
    {userLoginStatus &&
    <li className="nav-item dropdown">
       
       <Link className="nav-link "   style={{padding:"1.3rem"}} to="/user">User Details</Link>
       
       </li>}

          
          
          
        </Nav>
      </Navbar.Collapse>
    </div >
  </Navbar>
  )
}

export default NavbarMain