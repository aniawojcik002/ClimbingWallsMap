import React, { useState } from "react";
import styles from "./ClientAccount.module.css";

const Accordion = () => {
  const [isActive, setIsActive] = useState(false);
  const accordionHandler = () => {
    setIsActive(!isActive);
  };
  return (
    <div>
    <div className={styles.accordion}>
      <div className={styles.accordionItem}>
        <div className={styles.accordionTitle} onClick={accordionHandler}>
          <div>Profile settings</div>
          <div >{isActive ? "-" : "+"}</div>
        </div>
        {isActive && <div className={styles.accordionContent}>
          <input type="file"></input>
        </div>}
      </div>
      <div className={styles.accordionItem}>
        <div className={styles.accordionTitle} onClick={accordionHandler}>
          <div>Boulder Statistics</div>
          <div >{isActive ? "-" : "+"}</div>
        </div>
        {isActive && <div className={styles.accordionContent}>
          <p>

          </p>
        </div>}
      </div>
    </div>
  </div>
  )
}

export default Accordion