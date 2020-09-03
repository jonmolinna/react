import React, { useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { addTask } from '../redux/actions/tasksAction'

const TaskForm = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const dispatch = useDispatch();

    const onSubmit = e => {
        e.preventDefault()

        const newTask = {
            id: Math.floor(Math.random() * 10000000),
            title,
            description
        }

        dispatch(addTask(newTask))
    }

    const error = useSelector(store => store.tasksReducer.error);

    return (
        <div className="container mt-3">
            {
                error ? (
                    <div class="alert alert-warning alert-dismissible fade show" role="alert">
                        <strong>{error}</strong>
                        <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                ) : null
            }
            <div className="row">
                <div className="col-md-4">
                    <div className="card">
                        <div className="card-body">
                            <h3 className="text-center">Apunte sus Tareas</h3>
                            <form className="mt-4" onSubmit={onSubmit}>
                                <div className="form-group">
                                    <input 
                                        type="text" 
                                        className="form-control" 
                                        autoFocus 
                                        placeholder="Escribe su tarea"
                                        onChange={e => setTitle(e.target.value)}
                                    />
                                </div>
                                <div className="form-group">
                                    <textarea 
                                        className="form-control"
                                        placeholder="Escriba su Description"
                                        onChange={e => setDescription(e.target.value)} 
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