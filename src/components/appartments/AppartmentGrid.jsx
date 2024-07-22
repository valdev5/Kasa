


import React, { useEffect, useState } from 'react'
import "../appartments/Appartment.jsx"
import Appartment from "./Appartment.jsx"
import "./Appartment.scss"




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
      {appartments.map((appartments) => (
      <Appartment title={appartments.title} imageUrl = {appartments.cover} id={appartments.id} />
        ))}
 
      </div>
  )
}

export default AppartmentGrid
