import React from "react";
import "../appartmentGrid/AppartmentGrid.scss";
import "./Appartment.scss";
import { Link } from "react-router-dom";

function Appartment(props) {
  return (
    <Link to={`/${props.id}`}>
      <div className="appartment">
        <img src={props.imageUrl} alt="" />
        <div className="appartment__subtitle">{props.title}</div>
      </div>
    </Link>
  );
}

export default Appartment;
