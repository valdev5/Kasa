import React from 'react'
import DropdownMenu from '../../components/dropdownMenu/dropdownMenu'
import "./about.scss"
import "../../components/appartmentBanner/appartmentBanner.scss"
import imageApropos from "../../assets/background_apropos.png"
import Banner from "../../layout/banner/Banner"

function About() {
  return (
 <>
 <Banner bannerimage={imageApropos} />
 <div className='container_about'>
 <DropdownMenu content="tesrekijlgfzekfjezkjfr" />
 <DropdownMenu />
 <DropdownMenu />
 <DropdownMenu />
 </div>
 </>
  )
}

export default About
