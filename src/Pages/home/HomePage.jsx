import React from 'react'
import "./HomePage.scss"
import Banner from "../../layout/banner/Banner.jsx"
import AppartmentGrid from "../../components/appartmentGrid/AppartmentGrid.jsx"

function HomePage() {
  return (
    <>
        <Banner />
        <AppartmentGrid />
    </>
  );
}


export default HomePage;
