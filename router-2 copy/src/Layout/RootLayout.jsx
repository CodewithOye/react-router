import React from 'react'
import Navbar from '../Components/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from '../Components/Footer'
// import Footer from '../Components/Footer'

const RootLayout = () => {
  return (
    <div>
        <Navbar />
        <div className="container">
            <Outlet />   
        </div>
        <hr />
        <Footer />
    </div>
  )
}

export default RootLayout