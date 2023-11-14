// TaskList.js

import React from 'react';
import Task from './Task'; // Make sure to adjust the path based on your project structure

const TaskList = ({ tasks, onToggle, onDelete }) => {
  return (
    <div className="task-list">
      {tasks.map(task => (
        <Task key={task.id} task={task} onToggle={onToggle} onDelete={onDelete} />
      ))}
    </div>
  );
};

export default TaskList;
