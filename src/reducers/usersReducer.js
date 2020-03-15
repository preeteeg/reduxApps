import { SET_LOADING, GET__USERS } from "../store/actions"

const initialState = {
    users: [],
    loading:false
}

export default function usersReducer(state = initialState, action)
{
    switch (action.type)
    {
        case SET_LOADING:
            return { ...state, loading: true }
        
        case GET__USERS:
            return {
                ...state,
                users: action.payload,
                loading:false,
             }
        
        default:
            return state
    }
}