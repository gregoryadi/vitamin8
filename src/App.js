import React from 'react';
import './App.css';
import TaskForm from './components/TaskForm'; 
import TaskList from './components/TaskList'; 

function App() {
  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">To-Do List</h1>
      {/* Task Form Component */}
      <TaskForm />
      {/* Task List Component */}
      <TaskList />
    </div>
  );
}

export default App;
