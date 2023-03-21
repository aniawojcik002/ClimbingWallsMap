import React from "react";
import Accordion from "./Accordion";
import Profile from "./Profile";
import styles from "./ClientAccount.module.css";

const ClientAccount = () => {
  return (
    <div>
      <div className={styles.accordion}>
        <Profile name="Ania" />
        <Accordion />
      </div>
    </div>
  );
};

export default ClientAccount;
