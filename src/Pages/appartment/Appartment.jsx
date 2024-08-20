import React, { useEffect, useState } from 'react';
import "./Appartment.scss";
import "../../components/dropdownMenu/dropdownMenu.scss";
import DropdownMenu from "../../components/dropdownMenu/dropdownMenu";
import AppartmentBanner from "../../components/appartmentBanner/appartmentBanner";
import AppartmentHeader from "../../components/appartmentHeader/appartmentHeader";
import Slideshow from "../../components/slideshow/slideshow"; 
import { useLocation } from 'react-router-dom';

function AppartmentPage() {
  const location = useLocation();
  const [selectedFlat, setSelectedFlat] = useState(null);

  useEffect(() => {
    fetchAppartmentsData();
  }, []);

  function fetchAppartmentsData() {
    fetch("db.json")
      .then((res) => res.json())
      .then((flats) => {
        const flat = flats.find((flat) => flat.id === location.state.appartmentsId);
        setSelectedFlat(flat);
      })
      .catch(console.error);
  }

  if (selectedFlat == null) return <div>...Loading</div>;

  const images = selectedFlat.pictures;
  const isCoverInSlideshow = images.includes(selectedFlat.cover);

  return (
    <div className="appartment-page">
      {!isCoverInSlideshow && <AppartmentBanner imageUrl={selectedFlat.cover} />}
      <Slideshow images={images} />
      <AppartmentHeader flat={selectedFlat} />
      <div className='appartment__description__container'>
        <DropdownMenu title="Description" content={selectedFlat.description} />
        <DropdownMenu 
          title="Équipements" 
          content={<ul>{selectedFlat.equipments.map((equipment, index) => <li key={index}>{equipment}</li>)}</ul>} 
        />
      </div>
    </div>
  );
}


export default AppartmentPage;
