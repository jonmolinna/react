import React from 'react';

import { Provider } from 'react-redux';
import store from './redux/store';

import Task from './componentes/Task';
import TaskForm from './componentes/TaskForm';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <TaskForm />
        <Task />
      </div>
    </Provider>
  );
}

export default App;