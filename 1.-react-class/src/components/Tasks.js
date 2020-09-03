import React from 'react';

import Task from './Task'

class Tasks extends React.Component {
    render(){
        return(
            <React.Fragment>
                {
                    this.props.tasks.map(task => <Task task={task} key={task.id} deleteTask={this.props.deleteTask} />)
                }
            </React.Fragment>
        )
    }
}

export default Tasks;