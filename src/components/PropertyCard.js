import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBed,
  faBath,
  faSterlingSign,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import "../styles/property-card.css";

const PropertyCard = ({
  title,
  type,
  bathrooms,
  bedrooms,
  price,
  city,
  email,
}) => {
  return (
    <div className="property-card" data-testid="property-card">
      <div className="property-card__title">{title}</div>
      <div className="property-card__type__city">
        {type} - {city}
      </div>
      <div className="property-card__bathrooms">
        <FontAwesomeIcon icon={faBath} /> {bathrooms}
      </div>
      <div className="property-card__bedrooms">
        <FontAwesomeIcon icon={faBed} /> {bedrooms}
      </div>
      <div className="property-card__price">
        <FontAwesomeIcon icon={faSterlingSign} /> {price}
      </div>
      <button
        className="property-card__email"
        type="button"
        onClick={() => {
          window.location.href = `mailto:${email}`;
        }}
      >
        <FontAwesomeIcon
          icon={faEnvelope}
          size="xl"
          style={{ color: "#ffffff" }}
        />
      </button>
    </div>
  );
};

export default PropertyCard;
