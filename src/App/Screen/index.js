import React from "react";
import styles from "./style.js";
import InputField from '../Components/Inputfield/index.js'
const TodoList = () => {
  return (
    <>
      <div style={styles.parent}>
        <h2 style={styles.heading}>Todo-App</h2>
        <div style={styles.main}>
          <div style={styles.inputContainer}><InputField /></div>
        </div>
      </div>
    </>
  );
};

export default TodoList;
