import {combineReducers, createStore} from 'redux';
import ringsReducer from './ringsReducer.js'


let reducers = combineReducers({
    rings : ringsReducer,
})

let store = createStore(reducers);
export default store;