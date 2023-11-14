import React from 'react';

const Task = ({ task, onToggle, onDelete}) => {
    return (
        <div className = {`task ${task.completed ? 'completed' : ''} `}>
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