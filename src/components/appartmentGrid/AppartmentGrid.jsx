


import React, { useEffect, useState } from 'react'
import "../appartment/Appartment.jsx"
import Appartment from "../appartment/Appartment.jsx"
import "./AppartmentGrid.scss"




function AppartmentGrid() {
  const [appartments,setAppartments] =useState([]);

  useEffect(fetchAppartments,[])

 function fetchAppartments(){
   fetch("db.json")
  .then((res) => res.json())
   .then((res) => setAppartments (res))
   .catch(console.error);

 } 


  
  return (
    <div className="grid">
      {appartments.map((appartments, index) => (
      <Appartment  key={index} title={appartments.title} imageUrl = {appartments.cover} id={appartments.id} />
        ))}
 
      </div>
  )
}

export default AppartmentGrid
