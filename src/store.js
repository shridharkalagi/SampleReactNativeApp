
import { combineReducers, createStore } from 'redux'
import todoReducer from './reducers/ToDoReducer'
let reducers = combineReducers({
   todoReducer
});

export default createStore(reducers);

