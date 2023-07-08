import React, { useState, useEffect } from "react";
import axios from "axios";
import PropertyCard from "./PropertyCard";
import Alert from "./Alert";

import "../styles/properties.css";

const Properties = () => {
  const [properties, setProperties] = useState([]);
  const [alert, setAlert] = useState({ message: "", isSuccess: false });

  useEffect(() => {
    setAlert({ message: "", isSuccess: false });
    axios
      .get("http://localhost:4000/api/v1/PropertyListing")
      .then((response) => {
        setProperties(response.data);
      })
      .catch((error) => {
        setAlert({
          message: "Server error, please try again later.",
          isSuccess: false,
        });
        console.error("Error finding properties: ", error);
        setTimeout(() => {
          setAlert({ message: "", isSuccess: false });
        }, 3000);
      });
  }, []);

  return (
    <div className="properties">
      <Alert message={alert.message} success={alert.isSuccess} />
      {properties.map((property) => (
        <PropertyCard key={property._id} {...property} />
      ))}
    </div>
  );
};

export default Properties;
