import React from 'react';

// Estado
import tasks from './sample/tasks.json';

// Componentes
import TaskForm from './components/TaskForm';
import Tasks from './components/Tasks';

 class App extends React.Component {
  state = {
    tasks: tasks
  }

  addTask = (title, description) => {
    const newTask = {
      title: title,
      description: description,
      id: this.state.tasks.length
    }
    this.setState({
      tasks: [...this.state.tasks, newTask]
    })
  }

  deleteTask = id => {
    const newTasks = this.state.tasks.filter(task => task.id !== id);
    this.setState({tasks: newTasks})
  }

   render(){
      return (
        <div>
          <TaskForm addTask={this.addTask} />
          <Tasks tasks={this.state.tasks} deleteTask={this.deleteTask} />
        </div>
      );
   }
}

export default App;