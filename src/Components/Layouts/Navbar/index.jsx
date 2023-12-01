import React from 'react'
import { Link, NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <nav>
        <h1>elcan</h1>
        <div className='links'>
        <NavLink to={"/"} className={(navData )=>(navData.isActive  ? "active": null)}><p>Home</p></NavLink>
        <NavLink to={"/contacts"}><p>Contacts</p></NavLink>
        <NavLink to={"/about"}><p>About</p></NavLink>
        </div>
       



    </nav>
  )
}

export default Navbar