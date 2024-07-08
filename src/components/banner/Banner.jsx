import React from 'react'
import bannerimage from "../../assets/imagebanner.jpg"
import "../banner/banner.scss"

function Banner() {
  return (
    <div className ="banner">  
    <img src={bannerimage} alt="banner" />
    <h1>Chez vous, partout et ailleurs</h1>
    </div>
  )
}

export default Banner
