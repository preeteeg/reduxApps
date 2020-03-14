
import { createStore } from 'redux'


const initialState = {
    count:10
}

// a reducer is responsible to update the state and expect the action
function reducer(state=initialState,action)
{
    console.log(state, action)
    
    return state
}

//createStore will look for reducer function to update the state
const store = createStore(reducer)
//
console.log(store.getState())
export default store