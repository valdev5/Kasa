import React from 'react'
import { AppartmentDescription } from '../../components/appartments/appartmentdescription'
import "./apropos.scss"
import  AppartmentBanner from '../../components/appartments/appartmentBanner'
import "../../components/appartments/appartmentBanner.scss"

function About() {
  return (
 <>
 <AppartmentBanner />
 <div className='container_about'>
 <AppartmentDescription />
 <AppartmentDescription />
 <AppartmentDescription />
 <AppartmentDescription />
 </div>
 </>
  )
}

export default About
