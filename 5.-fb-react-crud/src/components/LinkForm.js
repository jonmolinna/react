import React, {useState, useEffect} from 'react';
import { db } from '../firebase';
import { toast } from 'react-toastify';

const LinkForm = (props) => {
    const initialStateValues = {
        url:'',
        name:'',
        description:''
    };

    const [values, setValues] = useState(initialStateValues);

    const handleInputChange = e => {
        const {name, value} = e.target;
        setValues({...values, [name] : value})
    };

    // Validaciones
    const validateURL = str => {
        // validate url regex javascript => google
        return /^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:[/?#]\S*)?$/i.test(str)
    }

    const handleSubmit = e => {
        e.preventDefault();
        // console.log(validateURL(values.url)) => tru o false
        if(!validateURL(values.url)){
            return toast('Ivalid URL', {
                type: "warning",
                autoClose: "2500"
            });
        }

        props.addOrEditLink(values);
        setValues({...initialStateValues}) // Limpiar el formulario y agregar al input un value
    };

    // Obtenieno un enlace por el codigo
    const getLinById = async id => {
        const doc = await db.collection('links').doc(id).get();
        //console.log(doc.data())
        setValues({...doc.data()})
    }

    useEffect(() => {
        if(props.currentId === ''){
            setValues({...initialStateValues});
        } else {
            getLinById(props.currentId);
        }
    }, [props.currentId]) // El useEffect se va a ejecutar cuando pasemos el props.currentId

    return (
        <form className="card card-body" onSubmit={handleSubmit}>
            <div className="form-group input-group">
                <div className="input-group-text bg-light">
                    <i className="material-icons">insert_link</i>
                </div>
                <input 
                    type="text" 
                    className="form-control" 
                    placeholder="Ingrese Link" 
                    name="url"
                    onChange={handleInputChange}
                    autoFocus
                    value={values.url}
                />
            </div>
            <div className="form-group input-group">
                <div className="input-group-text bg-light">
                    <i className="material-icons">create</i>
                </div>
                <input 
                    type="text" 
                    className="form-control" 
                    name="name" 
                    placeholder="website name"
                    onChange={handleInputChange}
                    value={values.name}
                />
            </div>
            <div className="form-group">
                <textarea 
                    name="description" 
                    rows="3" 
                    className="form-control" 
                    placeholder="write a escripton"
                    onChange={handleInputChange}
                    value={values.description}
                />
            </div>
            <button className="btn btn-success btn-block">
                {props.currentId === '' ? 'Save' : 'Update'}
            </button>
        </form>
    )
}

export default LinkForm;