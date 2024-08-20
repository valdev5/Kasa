import React from 'react'
import "./banner.scss"
import bannerimage from "../../assets/imagebanner.jpg"

function Banner(props) {
  const image = props.bannerimage ? props.bannerimage : bannerimage
  const text = props.text ? props.text : "Chez vous,partout et ailleurs"
  return (
    <div className ="banner">  
    <img src={image} alt="banner" />
    <h1>{text}</h1>
    </div>
  )
}

export default Banner