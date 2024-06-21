import React from 'react'
import "./Navbar.css"

function Navbar() {
  return(
  <nav className="navbar">
    <div className="navbar__logo">
    <img src="LOGO.svg" alt="logo" />
    </div>
<div>Accueil</div>
<div>a propos </div>
  </nav>
  )
}

export default Navbar;
