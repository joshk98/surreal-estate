import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import qs from "qs";

import "../styles/sidebar.css";

const buildQueryString = (operation, valueObj) => {
  const { search } = useLocation();
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

const SideBar = () => {
  const [query, setQuery] = useState("");

  const navigate = useNavigate();

  const handleSearch = (event) => {
    event.preventDefault();
    const newQueryString = buildQueryString("query", {
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
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button className="search-button" type="submit">
          Search
        </button>
      </form>
      <Link to="/">Show All</Link>
      <Link to={buildQueryString("query", { city: "Manchester" })}>
        Manchester
      </Link>
      <Link to={buildQueryString("query", { city: "Leeds" })}>Leeds</Link>
      <Link to={buildQueryString("query", { city: "Sheffield" })}>
        Sheffield
      </Link>
      <Link to={buildQueryString("query", { city: "Liverpool" })}>
        Liverpool
      </Link>
      <Link to={buildQueryString("sort", { price: 1 })}>Price Ascending</Link>
      <Link to={buildQueryString("sort", { price: -1 })}>Price Descending</Link>
    </div>
  );
};

export default SideBar;
