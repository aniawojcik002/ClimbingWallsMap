import React from "react";
import userIcon from "../../assets/default-user.png";
import { UserAuth } from "../../context/AuthContext";

import styles from "./Profile.module.css";

const Profile = () => {
  const {user} = UserAuth();
  return (
    <>
      <div>Welcome {user.email} </div>
      <div className={styles.profileInfo}>
        <div className={styles.userAvatar}>
          <img src={userIcon} alt="Default avatar"></img>
        </div>
        <div className={styles.userInfo}>{user.email}</div>
        <div className={styles.userBoulder}>
          <p>here will be information about</p>
          <p>favourite climbing wall</p>
          <p>highest done boulder</p>
        </div>
      </div>
    </>
  );
};

export default Profile;
