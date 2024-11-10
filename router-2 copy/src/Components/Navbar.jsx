import React from 'react'
import Logo from '../assets/router.png'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='navbar'>
        <img src={Logo} alt="" width='120px'/>
        <ul>
            <NavLink to='/'>
                <li>Home</li>
            </NavLink>

            <NavLink to="/product">
                <li>Products</li>
            </NavLink>
            
            <NavLink to="/about">
                <li>About</li>
            </NavLink>
            <NavLink to="/contact">
                <li>Contact</li>
            </NavLink>
        </ul>
        <button>Get started</button>
    </div>
  )
}

export default Navbar