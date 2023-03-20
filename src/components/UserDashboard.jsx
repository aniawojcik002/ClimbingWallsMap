import React from "react";
import { UserAuth } from "../context/AuthContext";

import { useNavigate } from "react-router-dom";

const UserDashboard = () => {
  const { logout } = UserAuth();
  const navigate = useNavigate();
  const handleSignOut = async () => {
    try {
      await logout();
      navigate("/");
    } catch (e) {
      console.log(e.message);
    }
  };

  return (
    <>
      <div> tu będzie fantastyczny userDashboard</div>
      <button onClick={handleSignOut}>signOut</button>
    </>
  );
};

export default UserDashboard;
