import React from "react";
import PropertyCard from "./PropertyCard";

import "../styles/properties.css";

const Properties = () => {
  return (
    <div className="properties">
      <PropertyCard
        title="Beautiful House"
        type="Flat"
        bathrooms="2"
        bedrooms="3"
        price="250000"
        city="London"
        email="example@example.com"
      />
    </div>
  );
};

export default Properties;
