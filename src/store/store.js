

import { createStore,applyMiddleware,combineReducers } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension';
import countReducer from '../reducers/countReducer'
import modalReducer from '../reducers/modalReducer'
import usersReducer from '../reducers/usersReducer'
//redux thunk
import thunk from 'redux-thunk'

const middleware=[thunk]

//createStore will look for reducer function to update the state
const store = createStore(
    combineReducers({
        countState: countReducer,
        modalState: modalReducer,
        usersState:usersReducer
    }),
     composeWithDevTools(applyMiddleware(...middleware))
    //window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)
//dispatch

console.log(store.getState())
export default store