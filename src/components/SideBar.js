import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import qs from "qs";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "../styles/sidebar.css";

const buildQueryString = (search, operation, valueObj) => {
  const currentQueryParams = qs.parse(search, { ignoreQueryPrefix: true });
  const newQueryParams = {
    ...currentQueryParams,
    [operation]: JSON.stringify({
      ...JSON.parse(currentQueryParams[operation] || "{}"),
      ...valueObj,
    }),
  };
  return qs.stringify(newQueryParams, { addQueryPrefix: true, encode: false });
};

const SideBar = ({ search }) => {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const handleSearch = (event) => {
    event.preventDefault();
    const newQueryString = buildQueryString(search, "query", {
      title: { $regex: query },
    });
    navigate(newQueryString);
  };

  return (
    <div className="side-bar__links">
      <form className="search-form" onSubmit={handleSearch}>
        <input
          className="search-input"
          type="text"
          placeholder="Search by title"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button className="search-button" type="submit">
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </button>
      </form>
      <Link to="/">Show All</Link>
      <Link to={buildQueryString(search, "query", { city: "Manchester" })}>
        Manchester
      </Link>
      <Link to={buildQueryString(search, "query", { city: "Leeds" })}>
        Leeds
      </Link>
      <Link to={buildQueryString(search, "query", { city: "Sheffield" })}>
        Sheffield
      </Link>
      <Link to={buildQueryString(search, "query", { city: "Liverpool" })}>
        Liverpool
      </Link>
      <Link to={buildQueryString(search, "sort", { price: 1 })}>
        Price Ascending
      </Link>
      <Link to={buildQueryString(search, "sort", { price: -1 })}>
        Price Descending
      </Link>
    </div>
  );
};

export default SideBar;
