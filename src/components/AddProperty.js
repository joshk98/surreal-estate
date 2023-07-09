import React, { useState } from "react";
import axios from "axios";
import Alert from "./Alert";

import "../styles/add-property.css";

const AddProperty = () => {
  const initialState = {
    fields: {
      title: "",
      city: "Manchester",
      type: "Flat",
      bathrooms: "1",
      bedrooms: "1",
      price: "",
      email: "",
    },
    alert: {
      message: "",
      isSuccess: false,
    },
  };
  const [fields, setFields] = useState(initialState.fields);
  const [alert, setAlert] = useState(initialState.alert);

  const handleAddProperty = (event) => {
    event.preventDefault();
    setAlert({ message: "", isSuccess: false });
    axios
      .post("http://localhost:4000/api/v1/PropertyListing", fields)
      .then((response) => {
        setAlert({
          message: "Property added!",
          isSuccess: true,
        });
        console.log("Property added: ", response.data);
        setFields(initialState.fields);
        setTimeout(() => {
          setAlert({ message: "", isSuccess: false });
        }, 2000);
      })
      .catch((error) => {
        setAlert({
          message: "Server error, please try again later.",
          isSuccess: false,
        });
        console.error("Error adding property: ", error);
        setFields(initialState.fields);
        setTimeout(() => {
          setAlert({ message: "", isSuccess: false });
        }, 2000);
      });
  };
  const handleFieldChange = (event) => {
    setFields({ ...fields, [event.target.name]: event.target.value });
  };

  return (
    <div className="add-property">
      <Alert message={alert.message} success={alert.isSuccess} />
      <form className="add-property-form" onSubmit={handleAddProperty}>
        <label htmlFor="title">
          <div className="form-label">Title</div>
          <input
            id="title"
            name="title"
            value={fields.title}
            placeholder="e.g., 2 bed cottage"
            onChange={handleFieldChange}
            maxLength={30}
            required
          />
        </label>
        <label htmlFor="city">
          <div className="form-label">City</div>
          <select
            id="city"
            name="city"
            value={fields.city}
            onChange={handleFieldChange}
          >
            <option value="Manchester">Manchester</option>
            <option value="Leeds">Leeds</option>
            <option value="Sheffield">Sheffield</option>
            <option value="Liverpool">Liverpool</option>
          </select>
        </label>
        <label htmlFor="type">
          <div className="form-label">Type</div>
          <select
            id="type"
            name="type"
            value={fields.type}
            onChange={handleFieldChange}
          >
            <option value="Flat">Flat</option>
            <option value="Detached">Detached</option>
            <option value="Semi-Detached">Semi-Detached</option>
            <option value="Terraced">Terraced</option>
            <option value="End of Terrace">End of Terrace</option>
            <option value="Cottage">Cottage</option>
            <option value="Bungalow">Bungalow</option>
          </select>
        </label>
        <label htmlFor="bathrooms">
          <div className="form-label">Bathrooms</div>
          <select
            id="bathrooms"
            name="bathrooms"
            value={fields.bathrooms}
            onChange={handleFieldChange}
          >
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
        </label>
        <label htmlFor="bedrooms">
          <div className="form-label">Bedrooms</div>
          <select
            id="bedrooms"
            name="bedrooms"
            value={fields.bedrooms}
            onChange={handleFieldChange}
          >
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
        </label>
        <label htmlFor="price">
          <div className="form-label">Price (£)</div>
          <input
            id="price"
            name="price"
            value={fields.price}
            placeholder="e.g., 123000"
            onChange={handleFieldChange}
            required
            type="number"
            min="99999"
            max="1000000000"
          />
        </label>
        <label htmlFor="email">
          <div className="form-label">Email</div>
          <input
            id="email"
            name="email"
            value={fields.email}
            placeholder="e.g., john.smith@gmail.com"
            onChange={handleFieldChange}
            required
            type="email"
          />
        </label>
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default AddProperty;
