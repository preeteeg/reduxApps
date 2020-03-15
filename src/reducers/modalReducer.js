import { MODAL_OPEN, MODAL_CLOSE } from '../store/actions'


const initialState = {
    isOpen: false,
    name:"Am a modal",
    text:"Counter has been reset"
}

export default function modalReducer(state = initialState, action)
{
    switch (action.type)
    {
        case MODAL_CLOSE:
            return { ...state, isOpen: false }
        
        case MODAL_OPEN:
            return { ...state, isOpen: true }
        
        default:
            return state
    }
}