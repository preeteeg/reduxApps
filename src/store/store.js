

import { createStore } from 'redux'
import { INCREASE, DECREASE, RESET } from './actions'
import reducer from './reducers'


//createStore will look for reducer function to update the state
const store = createStore(reducer)
//dispatch
store.dispatch({ type: DECREASE })
store.dispatch({ type: RESET })
store.dispatch({ type: INCREASE})
console.log(store.getState())
export default store