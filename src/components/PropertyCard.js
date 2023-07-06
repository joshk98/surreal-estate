import React from "react";

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
      <div className="property-card__bathrooms">{bathrooms}</div>
      <div className="property-card__bedrooms">{bedrooms}</div>
      <div className="property-card__price">£{price}</div>
      <div className="property-card__email" type="button">
        Email
      </div>
    </div>
  );
};

export default PropertyCard;
