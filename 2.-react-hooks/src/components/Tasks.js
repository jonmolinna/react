import React from 'react';

const Tasks = (props) => {
    return(
        <div className="container mt-4">
            <div className="row">
                <div className="col-md-4">
                    <div className="card">
                        {
                            props.tasks.map((task) => (
                                <div className="card-body" key={task.id}>
                                    <h5 className="text-center">{task.title}</h5>
                                    <p>{task.description}</p>
                                    <button className="btn btn-danger" type="submit" onClick={() => props.deleteTask(task.id)}>
                                        X
                                    </button>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Tasks;