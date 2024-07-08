import React from 'react'
import "./Navbar.scss"
import { NavLink } from "react-router-dom"; 

function Navbar() {
  return(
  <nav className="navbar">
    <NavLink to ="/">
    <div className="navbar__logo">
    <img src="LOGO.svg" alt="logo" />
    </div>
    </NavLink>
    <NavLink to ="/">
      <div>Accueil</div>
</NavLink>
    <NavLink to ="/about">
      <div>A propos </div>
</NavLink>
  </nav>
  )
}

export default Navbar;
