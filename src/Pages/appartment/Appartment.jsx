import React, { useEffect, useState } from 'react';
import "./Appartment.scss";
import "../../components/dropdownMenu/dropdownMenu.scss";
import DropdownMenu from "../../components/dropdownMenu/dropdownMenu";
import AppartmentBanner from "../../components/appartmentBanner/appartmentBanner";
import AppartmentHeader from "../../components/appartmentHeader/appartmentHeader";
import Slideshow from "../../components/slideshow/slideshow";
import { useParams, useNavigate } from "react-router-dom";

function AppartmentPage() {
  const [selectedFlat, setSelectedFlat] = useState(null);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    fetchAppartmentsData();
  }, [id]);

  function fetchAppartmentsData() {
    fetch("/db.json")
      .then((res) => res.json())
      .then((flats) => {
        const flat = flats.find((flat) => flat.id === id);
        if (flat) {
          setSelectedFlat(flat);
        } else {
          navigate("/404"); // Redirige vers la page 404 si l'ID n'est pas valide
        }
      });
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
