import React from 'react';

import { Provider } from 'react-redux';
import store from './redux/store';

import TaskForm from './componentes/TaskForm';
import Task from './componentes/Task';

function App() {
  return (
    <Provider store={store}>
      <div>
        <TaskForm />
        <Task />
      </div>
    </Provider>
  );
}

export default App;