import React from 'react';

class Task extends React.Component {
    render(){
        const {task} = this.props;
        return(
            <div className="container mt-4">
                <div className="row">
                    <div className="col-md-4">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="text-center">{task.title}</h5>
                                <p>{task.description}</p>
                                <button className="btn btn-danger" onClick={this.props.deleteTask.bind(this, task.id)}>
                                    X
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Task;