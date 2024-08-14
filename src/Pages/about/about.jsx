import React from 'react'
import DropdownMenu from '../../components/dropdownMenu/dropdownMenu'
import "./about.scss"
import "../../components/appartmentBanner/appartmentBanner.scss"
import imageApropos from "../../assets/background_apropos.png"
import Banner from "../../layout/banner/Banner"

const aboutList = [
  {
    "name": "Fiabilité",
    "content": [
      "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes."
    ]
  },
  {
    "name": "Respect",
    "content": [
      "La bienveillance fait partie valeurs fondatrices de kasa. Tout comportement discriminatoire ou de perturbation du voisinnage entraînera une exclusion de notre plateforme."
    ]
  },
  {
    "name": "Service",
    "content": [
      "La bienveillance fait partie valeurs fondatrices de kasa. Tout comportement discriminatoire ou de perturbation du voisinnage entraînera une exclusion de notre plateforme."
    ]
  },
  {
    "name": "Sécurité",
    "content": [
      "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement corresponbd aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à jos équipes de vérifier que les standards sont bien respecéts. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."
    ]
  }
]

function About() {
  return (
    <>
      <Banner bannerimage={imageApropos} />
      <div className='container_about'>
      {aboutList.map((about, index) => (
            <DropdownMenu key={about.name} title={about.name} content={about.content} />
        ))}
      </div>
    </>
  )
}

export default About