import { MODAL_OPEN, MODAL_CLOSE } from '../store/actions'


const initialState = {
    isOpen: false,
    name:"",
    text:""
}

export default function modalReducer(state = initialState, action)
{
    switch (action.type)
    {
        case MODAL_CLOSE:
            return {
                ...state,
                isOpen: action.payload.isOpen,
                name: action.payload.name,
                text:action.payload.text
            }
        
        case MODAL_OPEN:
            return {
                ...state,
                isOpen: action.payload.isOpen,
                name: action.payload.name,
                text:action.payload.text
            }
        
        default:
            return state
    }
}