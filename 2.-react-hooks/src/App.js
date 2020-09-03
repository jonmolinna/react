import React, {useState} from 'react';

import data from './sample/tasks.json';
import TaskForm from './components/TaskForm';
import Tasks from './components/Tasks';

function App() {
  const [tasks, setTasks] = useState(data)

  const AddTask = (newTask) => {
    const newTasks = [...tasks, {title : newTask.title, description: newTask.description, id: tasks.length}]
    setTasks(newTasks)
  };

  const deleteTask = id => {
    const newTasks = tasks.filter(task => task.id !== id);
    setTasks(newTasks);
  }

  return (
    <div>
      <TaskForm addTask={AddTask} />
      <Tasks tasks={tasks}  deleteTask={deleteTask}/>
    </div>
  );
}

export default App;