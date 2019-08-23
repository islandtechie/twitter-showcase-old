import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <nav>
    <Link to='/'>Home</Link>
    <Link to='/user-search'>User Search</Link>
    <Link to='/random-search'>Random Search</Link>
 </nav>
  )
}

export default NavBar;
