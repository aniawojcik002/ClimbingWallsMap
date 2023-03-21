import React from "react";
import { UserAuth } from "../../context/AuthContext";

import Profile from "./Profile";
import Accordion from "./Accordion";

import styles from "./ClientAccount.module.css";
import { useNavigate } from "react-router-dom";

const UserDashboard = () => {
  const { logout} = UserAuth();
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
      <div className={styles.accordion}>
        <Profile />
        <Accordion />
      </div>
      <button onClick={handleSignOut}>signOut</button>
    </>
  );
};

export default UserDashboard;
