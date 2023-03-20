import React from "react";

import { Routes, Route } from "react-router-dom";

import "./App.css";

import MapComponent from "./components/MapComponent";
import Header from "./components/Header";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import UserDashboard from "./components/UserDashboard";
import { AuthContextProvider } from "./context/AuthContext";
import ProtectedRoutes from "./components/ProtectedRoutes";

function App() {
  return (
    <>
      <Header />
      <AuthContextProvider>
        <Routes>
          <Route path="/" element={<MapComponent />} />
          <Route path="/map" element={<MapComponent />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route
            path="/userDashboard"
            element={
              <ProtectedRoutes>
                <UserDashboard />
              </ProtectedRoutes>
            }
          />
          <Route path="*" element={"Page not found"} />
        </Routes>
      </AuthContextProvider>
    </>
  );
}

export default App;
