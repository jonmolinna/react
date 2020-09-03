import React, {useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { agregar_tareas } from '../redux/actions/tasksAction';

const TaskForm = () => {
    const taskss = useSelector((state) => state.tasksReducer)
    const [task, setTask] = useState({
        title: '',
        description: '',
        id: taskss.tasks.length
    })

    const dispatch = useDispatch();

    const onChange = e => {
        const {name, value} = e.target;
        setTask({...task, [name] : value})
    }

    const onSubmit = e => {
        e.preventDefault();
        dispatch(agregar_tareas(task))
    }

    return(
        <div className="container mt-3">
            <div className="row">
                <div className="col-md-4">
                    <div className="card">
                        <div className="card-body">
                            <h3 className="text-center">Apunte su Tareas</h3>
                            <form className="mt-4" onSubmit={onSubmit}>
                                <div className="form-group">
                                    <input 
                                        type="text"
                                        name="title"
                                        className="form-control"
                                        placeholder="Escribe su Tarea"
                                        autoFocus
                                        onChange={onChange}
                                    />
                                </div>
                                <div className="form-group">
                                    <textarea 
                                        name="description" 
                                        className="form-control"
                                        placeholder="Escriba su description"
                                        onChange={onChange} 
                                    />
                                </div>
                                <div className="form-group">
                                    <button className="btn btn-success form-control" type="submit">
                                        Enviar
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TaskForm;