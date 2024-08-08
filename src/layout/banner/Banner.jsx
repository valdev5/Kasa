import React from 'react'
import "./banner.scss"
import bannerimage from "../../assets/imagebanner.jpg"

function Banner(props) {
  const image = props.bannerimage ? props.bannerimage : bannerimage
  return (
    <div className ="banner">  
    <img src={image} alt="banner" />
    <h1>Chez vous, partout et ailleurs</h1>
    </div>
  )
}

export default Banner
