import React from "react";
import "./appartmentHeader.scss";

export function AppartmentHeader({ flat }) {
  const { name } = flat.host;
  const [firstName, lastName] = name.split(" ");

  return (
    <div className="appartment__header">
      <div className="appartment-page__title">
        <h1>{flat.title}</h1>
        <h2>{flat.location}</h2>
        <div className="appartment__locs">
          {flat.tags.map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </div>
      </div>
      <div className="appartment__proprio">
        <div className="appartment__proprio__detail">
          <h3>
            <span>{firstName}</span>
            <span>{lastName}</span>
          </h3>
          <div className="appartment__proprio__badge">
            <img src={flat.host.picture} alt="" />
          </div>
        </div>
        <div className="appartment__star">
          {[1, 2, 3, 4, 5].map((num) => (
            <span key={num} className={flat.rating >= num ? "on" : ""}>
              ★
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default AppartmentHeader;
