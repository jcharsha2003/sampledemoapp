import React from 'react'
import { Outlet } from 'react-router-dom'
import Services from './Services'

function UserProfile() {



  return (
    <div>
      <h1>Services</h1>
       <Services/>
      <div >
     <Outlet/>
     </div>
    </div>
  )
}

export default UserProfile