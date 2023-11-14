// App.js

import React, { useState } from 'react';
import TaskList from './TaskList'; // Adjust the path based on your project structure

const App = () => {
  // State for tasks
  const [tasks, setTasks] = useState([
    { id: 1, name: 'Wake Up', completed: false },
    { id: 2, name: 'Say my Prayers', completed: true },
    { id: 3, name: 'Drink water', completed: true },
    { id: 4, name: 'Scroll for 20 min', completed: true },
    { id: 5, name: 'Shower', completed: true },
    { id: 6, name: 'Put on my deodorant and fragance', completed: true },
    { id: 7, name: 'Make breakfast', completed: true },
    { id: 8, name: 'Pack my lunch', completed: true },
    { id: 9, name: 'Go to work', completed: true },
    { id: 10, name: 'Back from work, Change clothes', completed: true },
    { id: 11, name: 'Dinner, do the dishes', completed: true },
    { id: 12, name: 'Git Commit at least three tasks', completed: true },
    { id: 13, name: 'Watch TV/ Movie', completed: true },
    { id: 14, name: 'Say my Prayers', completed: true },
    { id: 15, name: 'go to bed', completed: true },
    // ... more tasks
  ]);

  // Function to handle task toggle
  const handleToggle = (taskId) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
  };

  // Function to handle task deletion
  const handleDelete = (taskId) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
  };

  return (
    <div className="App">
      <h1>React To-Do List</h1>
      <TaskList tasks={tasks} onToggle={handleToggle} onDelete={handleDelete} />
    </div>
  );
};

export default App;
