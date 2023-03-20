import React from "react";

import { Routes, Route } from "react-router-dom";

import "./App.css";

import MapComponent from "./MapComponent";
import Header from "./Header";
import Login from "./Login";
import SignUp from "./SignUp";
import UserDashboard from "./UserDashboard";
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
