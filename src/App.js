import React from "react";

import { Routes, Route } from "react-router-dom";

import "./App.css";

import MapComponent from "./MapComponent";
import Header from "./Header";
import Login from './Login';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<MapComponent />} />
          <Route path="/map" element={<MapComponent />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={"Page not found"} />
      </Routes>
    </>
  );
}

export default App;
