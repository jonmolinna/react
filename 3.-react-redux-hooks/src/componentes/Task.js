import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { eliminar_tareas } from '../redux/actions/tasksAction';

const Task = () => {
    const task = useSelector((state) => state.tasksReducer)
    const dispatch = useDispatch();
    
    return(
        <div className="container mt-4">
            <div className="row">
                <div className="col-md-4">
                    <div className="card">
                        {
                            task.tasks.map(t => (
                                <div className="card-body" key={t.id}>
                                    <h5>{t.title}</h5>
                                    <p>{t.description}</p>
                                    <button className="btn btn-danger" type="submit" onClick={() => {dispatch(eliminar_tareas(t.id))}}>
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

export default Task;