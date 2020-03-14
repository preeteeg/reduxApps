

import { createStore,applyMiddleware,combineReducers } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension';
import countReducer from '../reducers/countReducer'
import modalReducer from '../reducers/modalReducer'
import productsReducer from '../reducers/productsReducer'

//createStore will look for reducer function to update the state
const store = createStore(
    combineReducers({
        countState: countReducer,
        modalState: modalReducer,
        productsState:productsReducer
    }),
     composeWithDevTools()
    //window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)
//dispatch

console.log(store.getState())
export default store