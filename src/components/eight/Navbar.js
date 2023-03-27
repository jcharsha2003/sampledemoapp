import React from 'react'
import { Link } from 'react-router-dom'
function Navbar() {
  return (
    <div className='navbar p-0 '>
        <ul className='nav nav-tabs border-dark w-100 justify-content-center bg-light'>
            <li className='nav-item'>
                <Link className='nav-link' to="/">Home</Link>
            </li>
            <li className='nav-item'>
                <Link className='nav-link' to="/register">Register</Link>
            </li>
            <li className='nav-item'>
                <Link className='nav-link' to="/login">Login</Link>
            </li>
            <li className='nav-item'>
                <Link className='nav-link' to="/aboutus">Aboutus</Link>
            </li>
        </ul>
    </div>
  )
}

export default Navbar