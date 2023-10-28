import React, { useState } from "react";
import styles from "./style.js";
import LinearButton from "../Button/index.js";
import Task from "../Task/index.js";

const InputField = () => {
  const [inputData, setInputData] = useState("");
  const [tasks, setTask] = useState([]);

  const handleTask = () => {
    if (inputData) {
      setTask([...tasks, inputData]);
      setInputData("");
    }
  };

  return (
    <>
      <div style={styles.inputParent}>
        <input
          type="text"
          name="name"
          placeholder="write your task here..."
          style={styles.input}
          value={inputData}
          onChange={(e) => setInputData(e.target.value)}
        />
        <LinearButton onClick={handleTask}>Add Task</LinearButton>
        <div style={styles.taskDiv}>
          <Task tasks={tasks} />
        </div>
      </div>
    </>
  );
};

export default InputField;
