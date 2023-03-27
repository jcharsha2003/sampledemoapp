import React from 'react'
import NavbarMain from "./NavbarMain"
import Footer from "./Footer"
import { Outlet } from 'react-router-dom'
function RootLayout() {
  return (
    <div style={{minHeight:"100vh",display:"flex",flexDirection:"column"}}>
     <NavbarMain/>
     {/* placeholder */}
     <div >
     <Outlet/>
     </div>
     <div style={{marginTop:"auto"}}>
     <Footer/>
     </div>
     
    </div>
  )
}

export default RootLayout