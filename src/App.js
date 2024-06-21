import React from 'react'
import Navbar from './components/navbar/Navbar.jsx'
import "../src/App.css"
import Banner from "./components/banner/Banner.jsx"
import AppartmentGrid from "./components/appartments/AppartmentGrid.jsx"
import Main from "./components/main/main.jsx"
import Footer from "./components/footer/footer.jsx"


function App() {
  return (
    <div>
      <Navbar />
      <Main> {/* Utilisation de Main pour envelopper le contenu principal */}
        <Banner />
        <AppartmentGrid />
      </Main>
      <Footer />
    </div>
  );
}


export default App
