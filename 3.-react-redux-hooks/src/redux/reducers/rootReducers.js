import { combineReducers } from 'redux';
import tasksReducer from './tasksReducer';

const rootReducers = combineReducers({
    tasksReducer
});

export default rootReducers;