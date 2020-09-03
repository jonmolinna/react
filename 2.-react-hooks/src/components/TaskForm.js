import React, {useState} from 'react';

const TaskForm = (props) => {
    const [NewTask, setNewTask] = useState({
        title: '',
        description: ''
    })

    const onChange = e => {
        const {name, value} = e.target;
        setNewTask({...NewTask, [name] : value});
    };

    const onSubmit = e => {
        e.preventDefault();
        props.addTask(NewTask)
    }

    return(
        <div className="container mt-3">
            <div className="row">
                <div className="col-md-4">
                    <div className="card">
                        <div className="card-body">
                            <h3 className="text-center">Apunte sus Tareas</h3>
                            <form className="mt-4" onSubmit={onSubmit}>
                                <div className="form-group">
                                    <input 
                                        type="text" 
                                        name="title" 
                                        className="form-control"
                                        placeholder="Escribe su Tarea"
                                        onChange={onChange}
                                        autoFocus
                                    />
                                </div>
                                <div className="form-group">
                                    <textarea 
                                        name="description"
                                        rows="2"
                                        className="form-control"
                                        placeholder="Escriba su Description"
                                        onChange={onChange}
                                    />
                                </div>
                                <div className="form-group">
                                    <button className="btn btn-success form-control" type="submit">Enviar</button>
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