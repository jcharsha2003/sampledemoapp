import React from 'react'
import Navbar from "./Navbar"
import Footer from "./Footer"
import { Outlet } from 'react-router-dom'
function RootLayout() {
  return (
    <div style={{minHeight:"100vh",display:"flex",flexDirection:"column"}}>
     <Navbar/>
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