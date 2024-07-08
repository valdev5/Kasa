import React from 'react'
import "../appartments/AppartmentGrid.scss"
import "./Appartment.scss"
import { Link } from "react-router-dom";

function Appartment() {
  return (
    <div className="appartment">
      <Link to="/flat">
    <div className='appartment__subtitle'>  titre de la location</div>
    </Link>
    </div>
  )
}

export default Appartment
