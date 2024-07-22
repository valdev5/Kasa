import React from 'react'
import "../Pages/HomePage.scss"
import Banner from "../layout/banner/Banner.jsx"
import AppartmentGrid from "../components/appartments/AppartmentGrid.jsx"



function HomePage() {
  return (
    <>
        <Banner />
        <AppartmentGrid />
    </>
  );
}


export default HomePage;
