import React from 'react'
import { Outlet } from 'react-router-dom'

import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { Link } from 'react-router-dom'

function UserProfile() {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      <h1>Services</h1>
      <Button variant="primary" onClick={handleShow}>
        Services
      </Button>

      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Services</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          
      <ul className=" text-decoration-none">
      <li className="nav-item active">
        <Link className="nav-link " onClick={handleClose} to="accomodation">Accomodation</Link>
      </li>
      <li className="nav-item ">
        <Link className="nav-link " onClick={handleClose} to="job">Job</Link>
      </li>
      <li className="nav-item ">
        <Link className="nav-link " onClick={handleClose} to="health">Health</Link>
      </li>

      
     </ul>
        </Offcanvas.Body>
      </Offcanvas>
     
      <div >
     <Outlet/>
     </div>
    </div>
  )
}

export default UserProfile