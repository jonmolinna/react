import { GET_TASKS, DELETE_TASK, ADD_TASK, TASK_ERROR } from '../types/types';

const default_tasks = {
    tasks : [],
    error: null,
    loading: true
}

const tasks = (state = default_tasks, action) => {
    switch(action.type){
        case GET_TASKS:
            return {
                ...state,
                loading: false,
                tasks: action.payload
            }
        case DELETE_TASK:
            return {
                ...state,
                tasks: state.tasks.filter(task => task._id !== action.payload)
            }
        case ADD_TASK:
            return {
                ...state,
                tasks: [
                    ...state.tasks,
                    action.payload
                ]
            }
        case TASK_ERROR:
            return {
                ...state,
                error: action.payload
            }
        default:
            return state
    }
}

export default tasks;