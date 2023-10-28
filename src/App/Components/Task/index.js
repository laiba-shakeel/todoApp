import React from "react";
const Task = ({ tasks }) => {
  return (
    <ol>
      {tasks.map((task, index) => (
        <li
          style={{
            color: "black",
            fontSize: 25,
            height: 25,
            margin: 15,
            padding:15,
            gap:5, 
            border:"1px solid gray" , 
            borderRadius:5,
            textAlign:'center'
          }}
          key={index}
        >
          {task}
        </li>
      ))} 
    </ol>
  );
};

export default Task;

