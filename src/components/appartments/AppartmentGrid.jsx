


import React from 'react'
import "./AppartmentGrid.scss"
import Appartment from "./Appartment.jsx"
import "./Appartment.scss"
import  {logements}  from "../../logements.js"

logements.forEach(Appartment => {
  console.log(Appartment)
})

function AppartmentGrid() {
  return (
    <div className="grid">
        <Appartment />
        <Appartment />
        <Appartment />
        <Appartment />
         </div>
  )
}

export default AppartmentGrid
