import React from "react";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <nav className={styles.header}>
      <a href="/" className={styles.headerTitle}>
        Cracow Climbing Walls 
      </a>
      <ul>
        <li>
          <a href="/login" className={styles.headerLogin}>
            Log in
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
