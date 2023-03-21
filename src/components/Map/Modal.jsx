import React from "react";

import styles from "./Modal.module.css";

const Modal = ({ open, onClose, url }) => {
  if (!open) return null;
  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.imageContainer}>
        <img
          src={url}
          alt="Full size img of climbing wall"
          onClick={(e) => {
          e.stopPropagation();
          }}
         
        />
        ;
      </div>
      {console.log(`wlaczony modal ${url}`)}
    </div>
  );
};

export default Modal;
