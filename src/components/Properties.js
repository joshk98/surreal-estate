import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import PropertyCard from "./PropertyCard";
import Alert from "./Alert";
import SideBar from "./SideBar";

import "../styles/properties.css";

const Properties = () => {
  const [properties, setProperties] = useState([]);
  const [alert, setAlert] = useState({ message: "", isSuccess: false });
  const { search } = useLocation();

  useEffect(() => {
    setAlert({ message: "", isSuccess: false });
    axios
      .get("http://localhost:4000/api/v1/PropertyListing")
      .then(({ data }) => {
        setProperties(data);
      })
      .catch((error) => {
        setAlert({
          message: "Server error, please try again later.",
          isSuccess: false,
        });
        console.error("Error finding properties: ", error);
        setTimeout(() => {
          setAlert({ message: "", isSuccess: false });
        }, 2000);
      });
  }, []);

  useEffect(() => {
    axios
      .get(`http://localhost:4000/api/v1/PropertyListing${search}`)
      .then(({ data }) => setProperties(data))
      .catch((error) => console.error(error));
  }, [search]);

  return (
    <div className="container">
      <div className="side-bar">
        <SideBar />
      </div>
      <div className="properties">
        <Alert message={alert.message} success={alert.isSuccess} />
        {properties.map((property) => (
          <PropertyCard key={property._id} {...property} />
        ))}
      </div>
    </div>
  );
};

export default Properties;
