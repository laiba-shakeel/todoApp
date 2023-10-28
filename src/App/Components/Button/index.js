import React from "react";
import styles from "./style";
const LinearButton = ({ children, onClick }) => {
  return (
    <button style={styles.Button} onClick={onClick}>
      <p>{children}</p>
    </button>
  );
};

export default LinearButton;
