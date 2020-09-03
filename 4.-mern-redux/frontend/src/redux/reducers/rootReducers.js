import { combineReducers } from 'redux';
import tasksReducer from './tasksReducers';

const rootReducers = combineReducers({
    tasksReducer
});

export default rootReducers;