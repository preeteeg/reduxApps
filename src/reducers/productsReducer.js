import { SET_LOADING, GET_PRODUCTS } from "../store/actions"

const initialState = {
    products: [],
    loading:false
}

export default function productsReducer(state = initialState, action)
{
    switch (action.type)
    {
        case SET_LOADING:
            return { ...state, loading: true }
        
        case GET_PRODUCTS:
            return { ...state }
        
        default:
            return state
    }
}