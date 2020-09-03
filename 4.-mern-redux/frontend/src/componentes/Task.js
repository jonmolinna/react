import React from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { getTasks } from '../redux/actions/tasksAction';
import { deleteTask } from '../redux/actions/tasksAction';

const Task = () => {
    const dispatch = useDispatch();

    React.useEffect(() => {
        dispatch(getTasks())
    }, [])

    const tasks = useSelector(store => store.tasksReducer.tasks);

    return(
        <div className="container mt-4">
            <div className="row">
                <div className="col-md-4">
                        {
                            tasks.map(task => (
                                <div className="card mb-3" key={task._id}>
                                    <div className="card-body">
                                        <h5>{task.title}</h5>
                                        <p>{task.description}</p>
                                        <button 
                                            className="btn btn-danger"
                                            onClick={() => {dispatch(deleteTask(task._id))}}
                                        >
                                            X
                                        </button>
                                    </div>
                                </div>
                            ))
                        }
                </div>
            </div>
        </div>
    )
}

export default Task;