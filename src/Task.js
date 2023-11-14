// Task.js

import React from 'react';

const Task = ({ task, onToggle, onDelete }) => {
  // Check if task is undefined or doesn't have a completed property
  if (!task || !task.hasOwnProperty('completed')) {
    return null; // or some default content, or handle the error in another way
  }

  return (
    <div className={`task ${task.completed ? 'completed' : ''}`}>
      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => onToggle(task.id)}
      />
      <span className="task-name">{task.name}</span>
      <button onClick={() => onDelete(task.id)}>Delete</button>
    </div>
  );
};

export default Task;
