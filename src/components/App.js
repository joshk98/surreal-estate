import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./NavBar";
import Properties from "./Properties";
import AddProperty from "./AddProperty";

import "../styles/app.css";

const App = () => (
  <Router>
    <div className="app">
      <NavBar />
      <Routes>
        <Route path="/" element={<Properties />} />
        <Route path="/add-property" element={<AddProperty />} />
      </Routes>
    </div>
  </Router>
);

export default App;
