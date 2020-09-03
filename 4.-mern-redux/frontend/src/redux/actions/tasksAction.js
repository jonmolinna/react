import { GET_TASKS, DELETE_TASK, ADD_TASK, TASK_ERROR } from '../types/types';
import axios from 'axios';

export const getTasks = () => async (dispatch) => {
    try {
        const res = await axios.get('http://localhost:4000/api/task');
        dispatch({
            type: GET_TASKS,
            payload: res.data.data
        })
    } catch (err) {
        console.log(err)
    }
}

export const deleteTask = (id) => async (dispatch) => {
    try {
        await axios.delete(`http://localhost:4000/api/task/${id}`)
        dispatch({
            type: DELETE_TASK,
            payload: id
        })
    } catch (err) {
        console.log(err)
    }
}

export const addTask = (task) => async (dispatch) => {
    try {
        const res = await axios.post('http://localhost:4000/api/task', task)
        dispatch({
            type: ADD_TASK,
            payload: res.data.data
        })
    } catch (err) {
        dispatch({
            type: TASK_ERROR,
            payload: err.response.data.msg
        })
    }
}