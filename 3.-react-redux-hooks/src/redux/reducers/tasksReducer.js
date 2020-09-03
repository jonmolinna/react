import { DELETE_TASK, ADD_TASK } from '../types/types';

const default_tasks = {
    tasks : [ 
        {id : 0, title : "tasks one", description : "lorem ipsum"},
        {id : 1, title : "tasks two", description : "lorem ipsum"},
        {id : 2, title : "tasks three", description : "lorem ipsum"}
    ]
}

const tasks = (state = default_tasks, action) => {
    switch(action.type){
        case DELETE_TASK:
            return {
                ...state,
                tasks: state.tasks.filter(task => task.id !== action.payload.id)
            }
        case ADD_TASK:
            return {
                ...state,
                tasks: [...state.tasks, action.payload]
            }
        default:
            return state
    }
}

export default tasks;