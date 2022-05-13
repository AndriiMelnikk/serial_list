import { combineReducers, applyMiddleware, legacy_createStore } from 'redux'
import thunk from 'redux-thunk'
import DataSerial from './reducer/DataSerial';

let reducers = combineReducers({
    DataSerial
});

let store = legacy_createStore(reducers, applyMiddleware(thunk));

window.store = store;

export default store;