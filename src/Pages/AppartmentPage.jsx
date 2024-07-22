import React, { useEffect, useState } from 'react';
import "./Pages/Appartment.scss";
import "../components/appartments/appartmentdescription.scss";
import AppartmentBanner from "../components/appartments/appartmentBanner";
import AppartmentHeader from "../components/appartments/appartmentHeader";
import { useLocation } from 'react-router-dom';

function AppartmentDescription(props) {
  const [isContentVisible, setIsContentVisible] = useState(false);
  
  const showContent = () => {
    setIsContentVisible(!isContentVisible);
  };

  return (
    <div className='appartment__description'>
      <p className='description__header'>
        <span>{props.title}</span>
        <i 
          className={`fa-solid ${isContentVisible ? 'fa-chevron-down' : 'fa-chevron-up'}`} 
          onClick={showContent}
        ></i>
      </p>
      {isContentVisible && <p className='description__content'>{props.content}</p>}
    </div>
  );
}

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

  return (
    <div className="appartment-page">
      <AppartmentBanner imageUrl={selectedFlat.cover} />
      <AppartmentHeader flat={selectedFlat} />
      <div className='appartment__description__container'>
        <AppartmentDescription title="Description" content={selectedFlat.description} />
        <AppartmentDescription 
          title="Équipements" 
          content={<ul>{selectedFlat.equipments.map((equipment, index) => <li key={index}>{equipment}</li>)}</ul>} 
        />
      </div>
    </div>
  );
}

export default AppartmentPage;
