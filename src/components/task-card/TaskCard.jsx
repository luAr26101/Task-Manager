import React, { useState } from "react";
import Badge from "../badge/Badge";
import "./TaskCard.css";

function TaskCard(props) {
  // const [taskId, setTaskId] = useState(props.id);
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount((prev) => prev + 1);
  };

  return (
    <div className='card-wrapper'>
      <div className='card-header'>
        <p className='task-id'>{props.id}</p>
        <Badge status={props.status} />
      </div>
      <div className='card-content'>
        {/* <p>{props.name}</p> */}
        <p>{count}</p>
      </div>
      <div className='card-footer'>
        <button onClick={handleClick}>Increment</button>
        {/* <DateContainer date={props.dueDate} /> */}
      </div>
    </div>
  );
}

export default TaskCard;
