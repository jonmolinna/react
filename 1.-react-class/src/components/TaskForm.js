import React from 'react';

class TaskForm extends React.Component {
    state = {
        title: '',
        description: ''
    }

    // Permite llenar datos al estado
    onChange = e => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    // Permite guardar o enviar datos del estado
    onSubmit = e => {
        e.preventDefault();
        this.props.addTask(this.state.title, this.state.description)
    }

    render(){
        return(
          <div className="container mt-3">
              <div className="row">
                  <div className="col-md-4">
                      <div className="card">
                          <div className="card-body">
                              <h3 className="text-center">Apunte sus tareas</h3>
                              <form className="mt-4" onSubmit={this.onSubmit}>
                                <div className="form-group">
                                    <input 
                                        type="text"
                                        name="title" 
                                        className="form-control" 
                                        placeholder="Escriba una Tarea"
                                        onChange={this.onChange}
                                    />
                                </div>
                                <div className="form-group">
                                    <textarea
                                        className="form-control"
                                        name="description" 
                                        rows="4"
                                        placeholder="Escriba una description"
                                        onChange={this.onChange}
                                    >
                                    </textarea>
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
}

export default TaskForm;