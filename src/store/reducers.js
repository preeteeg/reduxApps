
import {INCREASE,DECREASE,RESET} from './actions'


const initialState = {
    count: 10,
    name:'Counter'
}


// a reducer is responsible to update the state and expect the action
export default function reducer(state = initialState, action)
{
    switch (action.type)
    {
        case DECREASE:
            return { ...state, count: state.count - 1 }
        case RESET:
            return { ...state, count: 0 }
        case INCREASE:
            return { ...state, count: state.count + 1 }

        default:
            return state
    }


}
