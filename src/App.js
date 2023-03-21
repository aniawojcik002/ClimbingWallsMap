import React from "react";

import { Routes, Route } from "react-router-dom";

import "./App.css";

import MapComponent from "./components/Map/MapComponent";
import Header from "./components/Header/Header";
import Login from "./components/Login/Login";
import SignUp from "./components/SignUp/SignUp";
import UserDashboard from "./components/UserDashboard/UserDashboard";
import { AuthContextProvider } from "./context/AuthContext";
import ProtectedRoutes from "./components/ProtectedRoutes";
import ClientAccount from "./components/UserDashboard/ClientAccount";

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
          <Route path="/client" element={<ClientAccount />} />

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
