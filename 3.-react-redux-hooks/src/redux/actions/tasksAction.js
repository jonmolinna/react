import { DELETE_TASK, ADD_TASK } from '../types/types';

export const eliminar_tareas = (id) => {
    return {
        type: DELETE_TASK,
        payload: {
            id: id
        }
    }
}

export const agregar_tareas = (task) => {
    return {
        type: ADD_TASK,
        payload: task
    }
}